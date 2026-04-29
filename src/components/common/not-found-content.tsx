"use client"
import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ALL_APP_PATHS, DEFAULT_ROUTE } from "@constant/nav-routes"

import { Button } from "@/components/ui/button"
import Icon from "@components/icons"
import AdminLayout from "@components/common/admin-layout"


const NotFoundContent: React.FC = () => {
    const pathname = usePathname()
    const router = useRouter()

    const isAdminPath = ALL_APP_PATHS.some(route => pathname.startsWith(route))

    if (isAdminPath) {
        return (
            <AdminLayout>
                <AdminNotFound />
            </AdminLayout>
        )
    }

    return <GlobalNotFound onBack={() => router.back()} onNavigaion={() => router.push(DEFAULT_ROUTE)}   />
}

export default NotFoundContent



interface GlobalNotFound {
    onBack: () => void,
    onNavigaion: () => void
}

const GlobalNotFound: React.FC<GlobalNotFound> = ({ onBack, onNavigaion }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
            <div className="mb-8 select-none">
                <span className="text-[10rem] font-black leading-none tracking-tighter text-primary/80 sm:text-[14rem]">
                    404
                </span>
            </div>

            <p className="mb-8 max-w-md text-center text-lg text-muted-foreground">
                Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button
                    onClick={onNavigaion}
                    className="h-11 px-8"
                >
                    <Icon name="House" className="size-5" />
                    Go Vendor Management
                </Button>

                <Button
                    onClick={onBack}
                    variant="outline"
                    className="h-11 px-8"
                >
                    <Icon name="ArrowLeft" className="size-5" />
                    Go Back
                </Button>
            </div>
        </div>
    )
}


const AdminNotFound = () => {
    return (
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
                <Link href="/purchase/vendor">
                    <Icon name="ArrowLeft" className="size-5" />
                    Back to Vendor Management
                </Link>
            </Button>
        </div>
    )
}