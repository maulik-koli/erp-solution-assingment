"use client"
import React, { useState } from "react"
import { useIsMobile } from "@hooks/use-mobile"

import { TooltipProvider } from "@ui/tooltip"
import AppSidebar from "@/components/layouts/app-sidebar"
import Header from "@/components/layouts/header"

const ICON_RAIL_WIDTH = 64
const NAV_SIDEBAR_WIDTH = 220


const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(true)
    const isMobile = useIsMobile()

    const sidebarOffset = isMobile
        ? ICON_RAIL_WIDTH
        : isNavOpen
            ? ICON_RAIL_WIDTH + NAV_SIDEBAR_WIDTH
            : ICON_RAIL_WIDTH

    return (
        <TooltipProvider delayDuration={0}>
            <div className="min-h-screen bg-background overflow-x-hidden">
                <AppSidebar
                    isMobile={isMobile}
                    isNavOpen={isNavOpen}
                    onToggleNav={() => setIsNavOpen((v) => !v)}
                />

                <Header
                    sidebarOffset={sidebarOffset}
                    onToggleNav={() => setIsNavOpen((v) => !v)}
                />

                <main
                    className="bg-background pt-16 transition-[margin-left] duration-300 ease-in-out md:rounded-tl-xl"
                    style={{ marginLeft: `${sidebarOffset}px` }}
                >
                    <div className="p-4 sm:p-6 md:rounded-tl-xl">
                        {children}
                    </div>
                </main>
            </div>
        </TooltipProvider>
    )
}

export default AdminLayout