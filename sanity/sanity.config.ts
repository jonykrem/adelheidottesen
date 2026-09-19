import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { categoryTitle } from '../src/lib/categories'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'adelheidottesen',

  projectId: 'vaix14a0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: async (S, context) => {
        const artworkGroups = await context
          .getClient({ apiVersion: '2025-01-01' })
          .fetch<Array<{ category: string; year: number }>>(
            '*[_type == "artwork" && defined(category) && defined(year)]{category, year}',
          )

        const categories = [...new Set(artworkGroups.map(({ category }) => category))].sort()
        const categoryLists = categories.map((category) => {
          const years = [
            ...new Set(
              artworkGroups
                .filter((group) => group.category === category)
                .map(({ year }) => year),
            ),
          ].sort((a, b) => b - a)

          const yearLists = years.map((year) =>
            orderableDocumentListDeskItem({
              id: `artwork-${category}-${year}`,
              title: String(year),
              type: 'artwork',
              filter: '_type == "artwork" && category == $category && year == $year',
              params: { category, year },
              createIntent: false,
              S,
              context,
            }),
          )

          return S.listItem()
            .id(`artwork-category-${category}`)
            .title(categoryTitle(category as Parameters<typeof categoryTitle>[0]))
            .child(S.list().title(categoryTitle(category as Parameters<typeof categoryTitle>[0])).items(yearLists))
        })

        return S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('artwork').title('All artworks'),
            S.listItem().title('Order artworks').child(
              S.list().title('Order artworks').items(categoryLists),
            ),
            ...S.documentTypeListItems().filter((item) => item.getId() !== 'artwork'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
