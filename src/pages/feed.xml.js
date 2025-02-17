import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
    const postImportResult = import.meta.glob('./posts/*.md', { eager: true });
    const posts = Object.values(postImportResult);


    return rss({
        title: 'Rachel’s Website',
        description: 'Posts about my projects and adventures',
        site: context.site,
        items: await Promise.all(posts.map(async (post) => ({
            link: post.url,
            content: sanitizeHtml((await post.compiledContent())),
            ...post.frontmatter,
        }))),
        customData: `<language>en-us</language>`,
    });
    
}