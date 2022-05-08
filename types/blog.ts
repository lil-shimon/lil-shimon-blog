/*
 * Copyright (c) 2022 lil-shimon
 */

export interface Blog {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    content: string
    eyecatch: {
        url: string
        height: number
        width: number
    }
    tag: string
}