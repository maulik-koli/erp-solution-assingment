import React from 'react'
import { cn } from '@lib/utils'
import Icon, { IconType } from '@components/icons'
import { Card, CardContent } from '@ui/card'

type ErrorBlockVariant = 'error' | 'empty'

const VARIANT_CONFIG: Record<ErrorBlockVariant, {
    icon: IconType
    defaultTitle: string
    defaultMessage: string
    iconColor: string
    bgColor: string
}> = {
    error: {
        icon: 'AlertTriangle',
        defaultTitle: 'Something went wrong',
        defaultMessage: 'An unexpected error occurred. Please try again later.',
        iconColor: 'text-red-500',
        bgColor: 'bg-red-500/10',
    },
    empty: {
        icon: 'Inbox',
        defaultTitle: 'No data found',
        defaultMessage: 'There are no records to display at the moment.',
        iconColor: 'text-muted-foreground',
        bgColor: 'bg-muted/50',
    },
}

interface ErrorBlockProps {
    variant?: ErrorBlockVariant
    title?: string
    message?: string
    className?: string
}


const ErrorBlock: React.FC<ErrorBlockProps> = ({
    variant = 'error',
    title,
    message,
    className,
}) => {
    const config = VARIANT_CONFIG[variant]

    return (
        <Card className={cn("border-none shadow-none", className)}>
            <CardContent className="flex flex-col items-center justify-center gap-3 py-12">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", config.bgColor)}>
                    <Icon name={config.icon} className={cn("h-6 w-6", config.iconColor)} />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-sm font-medium text-foreground">
                        {title ?? config.defaultTitle}
                    </p>
                    <p className="max-w-sm text-xs text-muted-foreground">
                        {message ?? config.defaultMessage}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default ErrorBlock