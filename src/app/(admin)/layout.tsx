"use client"

import React, { useState } from "react"
import { TooltipProvider } from "@ui/tooltip"
import AppSidebar from "@/components/layouts/app-sidebar"
import Header from "@/components/layouts/header"

const ICON_RAIL_WIDTH = 60
const NAV_SIDEBAR_WIDTH = 220

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(true)

    const sidebarOffset = isNavOpen
        ? ICON_RAIL_WIDTH + NAV_SIDEBAR_WIDTH
        : ICON_RAIL_WIDTH

    return (
        <TooltipProvider delayDuration={0}>
            <div className="min-h-screen bg-background">
                <AppSidebar isNavOpen={isNavOpen} onToggleNav={() => setIsNavOpen((v) => !v)} />

                <Header sidebarOffset={sidebarOffset} />

                <main
                    className="rounded-tl-xl bg-background pt-16 transition-[margin-left] duration-300 ease-in-out"
                    style={{ marginLeft: `${sidebarOffset}px` }}
                >
                    <div className="rounded-tl-xl p-6">
                        {children}
                    </div>
                </main>
            </div>
        </TooltipProvider>
    )
}

export default AdminLayout