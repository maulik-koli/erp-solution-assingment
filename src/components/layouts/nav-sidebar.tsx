'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@lib/utils'
import { getSidebarForPath } from '@constant/nav-routes'
import Icon from '@components/icons'

interface NavSidebarProps {
    isOpen: boolean
    isMobile: boolean
    onClose: () => void
}


const NavSidebar: React.FC<NavSidebarProps> = ({ isOpen, isMobile, onClose }) => {
    const pathname = usePathname()
    const sidebar = getSidebarForPath(pathname)

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                onClick={onClose}
            />

            <aside
                className={cn(
                    "fixed top-0 z-30 flex h-screen flex-col bg-card",
                    "transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    isMobile ? "left-16 w-[min(85vw,280px)]" : "left-16 w-55",
                )}
                style={isMobile ? undefined : { left: 64, width: 220 }}
            >

                <div className="flex h-16 items-center gap-2.5 px-4">
                    <div className="flex size-12 items-center justify-center ">
                        <Icon name="logo" className="size-12 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold leading-tight text-foreground">
                            Sterling Cloud
                        </span>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    {sidebar ? (
                        <div className="mb-4">
                            <span className="mb-2 block px-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                                {sidebar.heading}
                            </span>

                            <ul className="flex flex-col gap-0.5">
                                {sidebar.items.map((item) => {
                                    const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-2.5 rounded-lg px-4 py-3 text-[13px] transition-all duration-150",
                                                    isActive
                                                        ? "bg-primary text-primary-foreground shadow-sm"
                                                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                                                )}
                                            >
                                                {/* <Icon name={item.icon} className="size-4 shrink-0" /> */}
                                                <span className="truncate">{item.label}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-3 px-2 py-12 text-center">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                <Icon name="Package" className="size-5 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                                This module is coming soon
                            </p>
                            <p className="text-xs text-muted-foreground/60">
                                Sub-pages will appear here once available.
                            </p>
                        </div>
                    )}
                </nav>
            </aside>
        </>
    )
}

export default NavSidebar