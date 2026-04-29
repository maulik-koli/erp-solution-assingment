"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { DEFAULT_ROUTE } from "@constant/nav-routes"

import { Button } from "@/components/ui/button"
import ErrorBlock from "@components/common/error-block"


const ErrorPage: React.FC = () => {
    const router = useRouter()

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
            <div className="w-full max-w-2xl space-y-6">
                <ErrorBlock
                    variant="error"
                    title="Something went wrong"
                    message="The app hit an unexpected issue. You can try again or go back to the main dashboard."
                    className="rounded-3xl border border-border/60 bg-card/80 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.35)] backdrop-blur"
                />

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button variant="outline" onClick={() => router.push(DEFAULT_ROUTE)} className="h-11 min-w-32 px-6">
                        Go to Main Page
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    If this keeps happening, refresh the page or return to the home view.
                </div>
            </div>
        </div>
    )
}

export default ErrorPage