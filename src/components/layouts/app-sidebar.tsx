"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { RAIL_ITEMS } from "@constant/nav-routes"

import NavSidebar from "./nav-sidebar"
import Icon from '@components/icons'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@ui/tooltip"

export interface AppSidebarProps {
    isNavOpen: boolean
    onToggleNav: () => void
    isMobile: boolean
}


const AppSidebar: React.FC<AppSidebarProps> = ({ isNavOpen, onToggleNav, isMobile }) => {
    return (
        <>
            <IconRail isNavOpen={isNavOpen} onToggle={onToggleNav} />
            <NavSidebar isMobile={isMobile} isOpen={isNavOpen} onClose={onToggleNav} />
        </>
    )
}

export default AppSidebar



interface IconRailProps {
    isNavOpen: boolean
    onToggle: () => void
}

function IconRail({ onToggle }: IconRailProps) {
    const pathname = usePathname()

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-40 flex h-screen w-16 flex-col items-center",
                "border-r border-border bg-background py-4",
            )}
        >
            <button
                onClick={onToggle}
                className={cn(
                    "mb-6 flex size-9 items-center justify-center rounded-lg cursor-pointer",
                    "text-sidebar-icon transition-colors hover:bg-accent hover:text-foreground",
                )}
                aria-label="Toggle navigation"
            >
                <Icon name="menu" className="size-5"  />
            </button>

            <nav className="flex flex-1 flex-col items-center gap-1">
                {RAIL_ITEMS.map((item) => {
                    const isActive = item.isSelected && pathname === '/'
                    return (
                        <Tooltip key={item.label + item.icon}>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={cn(
                                        "flex size-10 items-center justify-center rounded-xl transition-all duration-200",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-sidebar-icon hover:bg-accent hover:text-foreground",
                                    )}
                                >
                                    <Icon name={item.icon} className="size-5" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={8}>
                                {item.label}
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </nav>
        </aside>
    )
}