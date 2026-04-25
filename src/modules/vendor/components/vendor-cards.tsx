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
        <div className='grid grid-cols-4 gap-5'>
            {VENDOR_CARDS_DATA.map((card, index) => (
                <div className='bg-card p-6 rounded-xl flex justify-between' key={card.label+index}>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm text-muted-foreground font-medium'>{card.label}</span>
                        <span className='text-2xl text-foreground font-bold'>{card.count}</span>
                    </div>
                    <div className='bg-primary/5 h-12 w-12 rounded-xl flex items-center justify-center text-primary'>
                        <Icon name={card.icon} className='size-5' strokeWidth={2} />
                    </div>   
                </div>
            ))}
        </div>
    )
}

export default VendorCards