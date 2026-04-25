import React from 'react'
import { Input, SelectField } from '@form/index'
import { Button } from '@ui/button'
import { VendorStatus } from '../api/type'

interface VendorFilterProps {
    searchValue: string,
    filterValue: VendorStatus
    onSeachChnage: (search: string) => void
    onFilterChnage: (status: VendorStatus) => void
}

const VENDOR_STATUS_OPTIONS: { label: string, value: VendorStatus }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Disabled", value: "disabled" },
]


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
                <Button className='h-9'>Create Vendor</Button>
            </div>
        </div>
    )
}

export default VendorFilter