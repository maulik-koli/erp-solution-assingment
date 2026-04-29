'use client'
import React, { useState } from 'react'
import { VendorSort } from '../api/type'
import { VENDOR_SORT_OPTIONS } from '@constant/select-options'

import VendorForm from './vendor-form'
import DialogComponent from '@components/common/dialog-com'
import { Input, SelectField } from '@form/index'
import { Button } from '@ui/button'

interface VendorFilterProps {
    searchValue: string,
    sortValue: VendorSort | undefined
    onSeachChnage: (search: string) => void
    onSortChnage: (status: VendorSort) => void
}


const VendorFilter: React.FC<VendorFilterProps> = ({ onSeachChnage, sortValue, onSortChnage, searchValue }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
            <Input
                leftIcon='Search'
                placeholder='Search Vendors by supplier name...'
                className='h-9 w-full'
                value={searchValue}
                onChange={(e) => onSeachChnage(e.currentTarget.value)}
            />
            <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
                <SelectField
                    value={sortValue}
                    onChange={(val) => onSortChnage(val as VendorSort)}
                    placeholder='Select Sort'
                    options={VENDOR_SORT_OPTIONS}
                    containerClass='h-9 w-full sm:min-w-50'
                />
                <DialogComponent
                    trigger={
                        <Button className='h-9 w-full sm:w-auto'>Create Vendor</Button>
                    }
                    open={open}
                    onOpenChange={(op) => setOpen(op)}
                    title="New Supplier"
                    description="Fill in the details below to create a new vendor in the system."
                    className='w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] sm:w-[calc(100vw-16rem)] sm:max-w-6xl'
                >
                    <VendorForm onClose={setOpen} action='create' data={null} />
                </DialogComponent>
            </div>
        </div>
    )
}

export default VendorFilter