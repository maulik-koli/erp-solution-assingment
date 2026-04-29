import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100"

const routes = [
    "/login",
    "/",
]

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    return routes.map((path) => ({
        url: new URL(path, siteUrl).toString(),
        lastModified: now,
        changeFrequency: path === "/login" ? "monthly" : "weekly",
        priority: path === "/login" ? 0.6 : 0.8,
    }))
}