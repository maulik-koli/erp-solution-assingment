"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useLogout } from "@modules/auth/api/mutation"
import { useToast } from "@hooks/use-toast"
import { cn } from "@/lib/utils"

import Icon from "@/components/icons"
import Dropdown from "@components/common/dropdown"
import { useTheme } from "next-themes"


export interface HeaderProps {
    sidebarOffset: number
    onToggleNav: () => void
}


const Header: React.FC<HeaderProps> = ({ sidebarOffset, onToggleNav }) => {
    const { mutate, isPending } = useLogout()
    const { resolvedTheme, setTheme } = useTheme()
    const toast = useToast();
    const router = useRouter();
    
    const handleLogout = () => {
        mutate(undefined, {
            onSuccess: () => {
                router.push("/login");
            }
        })
    }

    const handleDarkModeToggle = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    const toastMessage = () => {
        toast.info("This feature is not available yet.")
    }

    toast.isLoading(isPending, "Logging out...")


    return (
        <header
            className={cn(
                "fixed top-0 right-0 z-20 flex h-16 items-center justify-end bg-card px-6 backdrop-blur-sm transition-[left] duration-300 ease-in-out",
            )}
            style={{ left: `${sidebarOffset}px` }}
        >
            <Dropdown
                
                trigger={
                    <div
                        className={cn(
                            "flex items-center gap-2.5 rounded-lg px-2 py-1.5",
                            "transition-colors hover:bg-accent",
                        )}
                    >
                        <div className="relative flex size-9 items-center justify-center rounded-full bg-primary/10 overflow-hidden">
                            <Image src="/avatar.jpg" fill sizes="36px" alt="User" className="object-cover" />
                        </div>
                        <div className="hidden flex-col items-start sm:flex">
                            <span className="text-sm font-medium leading-tight text-foreground">
                                Robbi Darwis
                            </span>
                            <span className="text-[11px] leading-tight text-primary">
                                Admin
                            </span>
                        </div>
                        <Icon name="ChevronDown" className="size-3.5 text-muted-foreground" />
                    </div>
                }
                items={[
                    {
                        label: "Profile",
                        icon: "User",
                        onClick: toastMessage,
                    },
                    {
                        label: "Theme",
                        icon: "SunMoon",
                        onClick: handleDarkModeToggle,
                        isSeparator: true
                    },
                    {
                        label: "Logout",
                        icon: "LogOut",
                        onClick: handleLogout,
                    },
                ]}
            />
        </header>
    )
}

export default Header