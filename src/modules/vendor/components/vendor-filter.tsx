import React from 'react'
import { VENDOR_STATUS_OPTIONS } from '@constant/select-options'
import { VendorStatus } from '@/types/enums'

import DialogComponent from '@components/common/dialog-com'
import { Input, SelectField } from '@form/index'
import { Button } from '@ui/button'
import VendorForm from './vendor-form'

interface VendorFilterProps {
    searchValue: string,
    filterValue: VendorStatus
    onSeachChnage: (search: string) => void
    onFilterChnage: (status: VendorStatus) => void
}


const VendorFilter: React.FC<VendorFilterProps> = ({ onSeachChnage, filterValue, onFilterChnage, searchValue }) => {

    return (
        <div className='flex items-center gap-3'>
            <Input
                leftIcon='Search'
                placeholder='Search Vendors by name, code, contact...'
                className='h-9'
                value={searchValue}
                onChange={(e) => onSeachChnage(e.currentTarget.value)}
            />
            <div className='flex items-center justify-center gap-2'>
                <SelectField
                    value={filterValue}
                    onChange={(val) => onFilterChnage(val as VendorStatus)}
                    placeholder='Select Field'
                    options={VENDOR_STATUS_OPTIONS}
                    containerClass='h-9'
                />
                <DialogComponent
                    trigger={
                        <Button className='h-9'>Create Vendor</Button>
                    }
                    title="New Supplier"
                    description="Fill in the details below to create a new vendor in the system."
                    className='w-[calc(100vw-16rem)]'
                >
                    <VendorForm />
                </DialogComponent>
            </div>
        </div>
    )
}

export default VendorFilter