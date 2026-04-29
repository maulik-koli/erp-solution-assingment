import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full flex-col gap-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-4 py-4 shadow-sm backdrop-blur sm:px-6">
                    <div className="flex items-center gap-3">
                        <Skeleton className="size-10 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-36" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                    </div>
                    <Skeleton className="h-9 w-24 rounded-full" />
                </div>

                <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
                    <div className="hidden rounded-3xl border border-border/60 bg-card/70 p-4 shadow-sm lg:block">
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-28" />
                            <div className="space-y-3">
                                <Skeleton className="h-10 w-full rounded-xl" />
                                <Skeleton className="h-10 w-full rounded-xl" />
                                <Skeleton className="h-10 w-full rounded-xl" />
                                <Skeleton className="h-10 w-5/6 rounded-xl" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-border/60 bg-card/80 p-5 shadow-sm sm:p-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-52" />
                                    <Skeleton className="h-4 w-80 max-w-full" />
                                </div>
                                <Skeleton className="h-10 w-32 rounded-full" />
                            </div>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                <Skeleton className="h-32 rounded-2xl" />
                                <Skeleton className="h-32 rounded-2xl" />
                                <Skeleton className="h-32 rounded-2xl sm:col-span-2 xl:col-span-1" />
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <Skeleton className="h-64 rounded-3xl border border-border/60 bg-card/80" />
                            <Skeleton className="h-64 rounded-3xl border border-border/60 bg-card/80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage