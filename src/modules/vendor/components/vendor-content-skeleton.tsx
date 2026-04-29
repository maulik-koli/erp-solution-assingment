import React from 'react'
import { Skeleton } from '@ui/skeleton'

const VendorContentSkeleton: React.FC = () => {
    return (
        <div className='rounded-xl border border-border bg-card p-4 sm:p-6'>
            <div className='flex flex-col gap-4'>
                <Skeleton className='h-6 w-28 rounded-md' />
                <Skeleton className='h-80 w-full rounded-2xl sm:h-105' />
            </div>
        </div>
    )
}

export default VendorContentSkeleton