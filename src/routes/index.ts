import type { RequestHandler } from "@sveltejs/kit"
import fs from 'fs'
import yaml from 'js-yaml'

export const get: RequestHandler = async () => {
    const posts = await getArticleMetas('src/routs/posts')
    return {
        body: { posts },
    }
}

export async function getArticleMetas(dir: string): Promise<ArticleMeta[]> {
    const promises = (await fs.promises.readdir(dir))
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/.md$/, ''))
    .map(id => getArticleMeta(dir, id))
 
    // TODO: .sort 이하 이해하기
    return (await Promise.all(promises)).sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export async function getArticleMeta(dir: string, id: string): Promise<ArticleMeta> {
    const content = (await fs.promises.readFile(`${dir}/${id}.md`)).toString()
    const frag = content.substring(4, content.indexOf('---\n', 4)).trim()
    return { id, ...(yaml.load(frag) as Record<string, string>) } as ArticleMeta
