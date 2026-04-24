"use client"
import React from "react"
import Icon from "@/components/icons"
import { cn } from "@/lib/utils"

export interface HeaderProps {
    sidebarOffset: number
}


const Header: React.FC<HeaderProps> = ({ sidebarOffset }) => {
    return (
        <header
            className={cn(
                "fixed top-0 right-0 z-20 flex h-16 items-center justify-end",
                "bg-card backdrop-blur-sm",
                "px-6 transition-[left] duration-300 ease-in-out",
            )}
            style={{ left: `${sidebarOffset}px` }}
        >
            <button
                className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2 py-1.5",
                    "transition-colors hover:bg-accent",
                )}
            >

                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="User" className="size-4 text-primary" />
                </div>

                <div className="hidden flex-col items-start md:flex">
                    <span className="text-sm font-medium leading-tight text-foreground">
                        Robbi Darwis
                    </span>
                    <span className="text-[11px] leading-tight text-primary">
                        Admin
                    </span>
                </div>

                <Icon name="ChevronDown" className="size-3.5 text-muted-foreground" />
            </button>
        </header>
    )
}

export default Header