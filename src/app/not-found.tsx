'use client'
import React, { Suspense } from "react"
import Link from "next/link"

import { Button } from "@ui/button"
import AdminLayout from "@components/common/admin-layout"
import Icon from "@components/icons"


const NotFound: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <AdminLayout>
                <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
                    <div className="relative mb-8">
                        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl animate-pulse" />
                        <div className="relative flex size-32 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/5 shadow-lg shadow-primary/10">
                            <span className="text-5xl font-black tracking-tighter text-primary">
                                404
                            </span>
                        </div>
                    </div>

                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                        Feature Not Available Yet
                    </h1>

                    <p className="mb-8 max-w-md text-base text-muted-foreground">
                        We&apos;re actively building this module. It will be available in an upcoming release.
                    </p>

                    <Button asChild size="lg" className="gap-2 px-6 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30">
                        <Link href="/">
                            <Icon name="ArrowLeft" className="size-5" />
                            Back to Vendor Management
                        </Link>
                    </Button>
                </div>
            </AdminLayout>
        </Suspense>
    )
}

export default NotFound;