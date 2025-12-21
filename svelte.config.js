import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            entries: ['*'],
            handleHttpError: ({ status }) => (status === 404 ? 'ignore' : 'fail')
        }
    }
};

export default config;
