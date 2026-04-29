import React from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import VendorCardsSkeleton from '@modules/vendor/components/vendor-cards-skeleton'
import VendorContentSkeleton from '@modules/vendor/components/vendor-content-skeleton'

const VendorCards = dynamic(
    () => import('@modules/vendor/components/vendor-cards'),
    {
        loading: () => <VendorCardsSkeleton />,
    },
)

const VendorContent = dynamic(
    () => import('@modules/vendor/components/vendor-content'),
    {
        loading: () => <VendorContentSkeleton />,
    },
)

export const metadata: Metadata = {
    title: 'Vendor Management | Sterling Cloud',
    description: 'Manage and control all vendor operations in Sterling Cloud',
}


const VendorPage: React.FC = () => {
    return (
        <div className='flex min-w-0 flex-col gap-4 sm:gap-5'>
            <div className='space-y-1'>
                <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Vendor Management</h1>
                <p className="max-w-2xl text-sm font-normal text-muted-foreground sm:text-base">
                    Manage and control all vendor operations
                </p>
            </div>
            <VendorCards />
            <VendorContent />
        </div>
    )
}

export default VendorPage