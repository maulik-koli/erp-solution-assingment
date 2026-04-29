'use client'
import React, { useState } from 'react'
import { useGetVendorList } from '../api/query'
import { useDebounce } from '@hooks/use-debounce'
import { VendorSort } from '../api/type'

import { Card, CardContent, CardHeader } from '@ui/card'
import VendorFilter from './vendor-filter'
import VendorTable from './vendor-table'
import TableSkeleton from '@components/common/table-skeleton'
import ErrorBlock from '@components/common/error-block'

// there is 15 field we want to show in the vendor table
const VENDOR_TABLE_COLUMNS = 15


const VendorContent: React.FC = () => {
    const [search, setSearch] = useState<string>("")
    const [sort, setSort] = useState<VendorSort | undefined>(undefined)

    const searchQuery = useDebounce(search, 500);

    const { data, error, isLoading } = useGetVendorList({ 
        search: searchQuery,
        sort
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

        return (
            <VendorTable vendors={data} />
        )
    }


    return (
        <Card className='border-none'>
            <CardHeader className='text-lg font-medium'>
                Vendor
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <VendorFilter
                    searchValue={search}
                    sortValue={sort}
                    onSeachChnage={(search) => setSearch(search)}
                    onSortChnage={(filter) => setSort(filter)}
                />
                {getContent()}
            </CardContent>
        </Card>
    )
}

export default VendorContent