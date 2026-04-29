import React from 'react'
import Icon, { IconType } from '@components/icons'
// import { useGetVendorCount } from '../api/hook'

// get vendor api giving error
// so using contatnt

const VENDOR_CARDS_DATA: { count: number, label: string, icon: IconType }[] = [
    { count: 245, label: "Total Vendors", icon: "Users" },
    { count: 245, label: "Avtive Vendors", icon: "Check" },
    { count: 180, label: "Credit Vendors", icon: "CreditCard" },
    { count: 35, label: "inavtive Vendors", icon: "Ban" },
]

const VendorCards: React.FC = () => {
    // const { data, error, isLoading } = useGetVendorCount();

    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-5'>
            {VENDOR_CARDS_DATA.map((card, index) => (
                <div className='flex justify-between rounded-xl bg-card p-5 sm:p-6' key={card.label+index}>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm font-medium text-muted-foreground'>{card.label}</span>
                        <span className='text-xl font-bold text-foreground sm:text-2xl'>{card.count}</span>
                    </div>
                    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary sm:h-12 sm:w-12'>
                        <Icon name={card.icon} className='size-4 sm:size-5' strokeWidth={2} />
                    </div>   
                </div>
            ))}
        </div>
    )
}

export default VendorCards