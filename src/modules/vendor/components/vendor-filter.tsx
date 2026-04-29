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
        <div className='flex items-center gap-3'>
            <Input
                leftIcon='Search'
                placeholder='Search Vendors by supplier name...'
                className='h-9'
                value={searchValue}
                onChange={(e) => onSeachChnage(e.currentTarget.value)}
            />
            <div className='flex items-center justify-center gap-2'>
                <SelectField
                    value={sortValue}
                    onChange={(val) => onSortChnage(val as VendorSort)}
                    placeholder='Select Sort'
                    options={VENDOR_SORT_OPTIONS}
                    containerClass='h-9 min-w-50'
                />
                <DialogComponent
                    trigger={
                        <Button className='h-9'>Create Vendor</Button>
                    }
                    open={open}
                    onOpenChange={(op) => setOpen(op)}
                    title="New Supplier"
                    description="Fill in the details below to create a new vendor in the system."
                    className='w-[calc(100vw-16rem)]'
                >
                    <VendorForm onClose={setOpen} action='create' data={null} />
                </DialogComponent>
            </div>
        </div>
    )
}

export default VendorFilter