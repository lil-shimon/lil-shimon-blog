/*
 * Copyright (c) 2022 lil-shimon
 */

import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import { FC } from "react";

type Props = {
    blog: Blog;
};

const BlogComponent: FC<Props> = ({blog}) => {
    return (
        <div className="bg-gray-50">
            <div className="px-10 py-6 mx-auto">
                <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
                    <img
                        className="object-cover w-full shadow-sm h-full"
                        src={blog.eyecatch.url}
                    />
                    <div className="mt-2">
                        <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
                            {blog.title}
                        </div>
                    </div>
                    {blog.tag && (
                        <div className="flex items-center justify-start mt-4 mb-4">
                            <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                                #{blog.tag}
                            </div>
                        </div>
                    )}
                    <div className="mt-2">
                        <div dangerouslySetInnerHTML={{__html: blog.content}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogComponent

export const getServerSideProps: GetServerSideProps = async ctx => {
    const id = ctx.params?.id;
    const idExceptArray = id instanceof Array ? id[0] : id;
    const data = await client.get({
        endpoint: 'blogs',
        contentId: idExceptArray,
    });

    return {
        props: {
            blog: data,
        },
    };
};