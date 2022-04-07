import { fileURLToPath } from 'url'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import path from 'path'
import preprocess from 'svelte-preprocess'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      smartypants: {
        dashes: 'oldschool',
      },
      remarkPlugins: [remarkAbbr],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      layout: {
        _: path.join(__dirname, './src/components/LayoutDefault.svelte'),
      },
    }),
  ],
  kit: {
    adapter: adapter(),
	prerender: {
		default: true,
	}
  },
}

export default config