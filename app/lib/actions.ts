"use server"

import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils"
import slugify from "slugify"

export const crearePitch = async ( state: any, form: FormData, pitch: string) => {
    const session = await auth()

    if(!session) return parseServerActionResponse({ error: "Not signed in",  status: "ERROR"})

    const { title, description, category, link } = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== "pitch")
    )

    const slug = slugify(title as string, { lower: true, strict: true });

    try {
        const startup = {
            title,
            description,
            category,
            link: link,
            slug: {
                _type: slug,
                current: slug,
            },
            author: {
                _type: "reference",
                ref: session.id,
            },
            pitch,
        }

    } catch(error) {
        console.log(error)

        return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR"})
    }
}

export default crearePitch