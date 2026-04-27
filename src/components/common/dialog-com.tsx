import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog'

interface DialogProps {
    trigger: React.ReactNode
    children: React.ReactNode
    title: string,
    description?: string
    className?: string
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

const DialogComponent: React.FC<DialogProps> = ({
    children,
    trigger,
    title,
    description,
    className,
    open,
    onOpenChange,
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <div className="overflow-y-auto max-h-[calc(100vh-14rem)] p-1 custom-scrollbar">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogComponent