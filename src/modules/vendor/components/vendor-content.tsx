'use client'
import React, { useState } from 'react'
import { useGetVendorList } from '../api/hook'
import { useDebounce } from '@hooks/use-debounce'
import { VendorStatus } from '../api/type'

import { Card, CardContent, CardHeader } from '@ui/card'
import VendorFilter from './vendor-filter'
import VendorTable from './vendor-table'
import TableSkeleton from '@components/common/table-skeleton'
import ErrorBlock from '@components/common/error-block'

// there is 16 field in the vendor item
const VENDOR_TABLE_COLUMNS = 16


const VendorContent: React.FC = () => {
    const [search, setSearch] = useState<string>("")
    const [filter, setFilter] = useState<VendorStatus>("all")

    const searchQuery = useDebounce(search, 500);

    const { data, error, isLoading } = useGetVendorList({ 
        search: searchQuery,
        status: filter
    })

    const getContent = () => {
        if (isLoading) return <TableSkeleton columns={VENDOR_TABLE_COLUMNS} rows={5} />

        if (error) {
            return (
                <ErrorBlock
                    variant="error"
                    title="Failed to load vendors"
                    message={error.message ?? 'An unexpected error occurred while fetching vendors.'}
                />
            )
        }

        if (!data || data.length === 0) {
            return (
                <ErrorBlock
                    variant="empty"
                    title="No vendors found"
                    message="There are no vendor records matching your criteria."
                />
            )
        }

        return <VendorTable vendors={data} />
    }


    return (
        <Card className='border-none'>
            <CardHeader className='text-lg font-medium'>
                Vendor
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <VendorFilter
                    searchValue={search}
                    filterValue={filter}
                    onSeachChnage={(search) => setSearch(search)}
                    onFilterChnage={(filter) => setFilter(filter)}
                />
                {getContent()}
            </CardContent>
        </Card>
    )
}

export default VendorContent