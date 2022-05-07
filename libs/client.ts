/*
 * Copyright (c) 2022 lil-shimon
 */

import { createClient } from "microcms-js-sdk";

export const client = createClient({
    apiKey: process.env.API_KEY || "",
    serviceDomain: "lil-shimon",
})