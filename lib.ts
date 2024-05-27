import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface FrontMatter {
    [key: string]: any;
}

interface MdxContent {
    mdxSource: MDXRemoteSerializeResult;
    data: FrontMatter;
}

export async function getMdxContent(filePath: string): Promise<MdxContent> {
    const source = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, { scope: data });
    return { mdxSource, data };
}
