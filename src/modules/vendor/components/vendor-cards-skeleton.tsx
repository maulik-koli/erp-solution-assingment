import React from 'react'
import { Skeleton } from '@ui/skeleton'

const VendorCardsSkeleton: React.FC = () => {
    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-5'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div className='rounded-xl bg-card p-5 sm:p-6' key={index}>
                    <div className='flex items-start justify-between gap-4'>
                        <div className='flex flex-col gap-3'>
                            <Skeleton className='h-4 w-28 rounded-md' />
                            <Skeleton className='h-8 w-16 rounded-md' />
                        </div>
                        <Skeleton className='h-12 w-12 rounded-xl' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VendorCardsSkeleton