import React from 'react'
import { Skeleton } from '@ui/skeleton'

const LoginFormSkeleton: React.FC = () => {
    return (
        <div className='w-full max-w-md px-3 py-6 sm:px-4'>
            <div className='rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8'>
                <div className='flex flex-col items-center gap-3 pb-6 text-center'>
                    <Skeleton className='h-7 w-44 rounded-md' />
                    <Skeleton className='h-4 w-56 rounded-md' />
                </div>

                <div className='flex flex-col gap-5 sm:gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Skeleton className='h-4 w-20 rounded-md' />
                        <Skeleton className='h-11 w-full rounded-md' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Skeleton className='h-4 w-20 rounded-md' />
                        <Skeleton className='h-11 w-full rounded-md' />
                    </div>

                    <Skeleton className='h-11 w-full rounded-md' />
                    <Skeleton className='h-4 w-36 rounded-md self-center' />

                    <div className='flex w-full flex-col gap-2 sm:flex-row sm:items-center'>
                        <Skeleton className='h-11 flex-1 rounded-md' />
                        <Skeleton className='h-11 flex-1 rounded-md' />
                    </div>

                    <Skeleton className='h-4 w-56 rounded-md self-center' />
                </div>
            </div>
        </div>
    )
}

export default LoginFormSkeleton