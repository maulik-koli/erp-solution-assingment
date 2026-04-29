'use client'
import React, { useMemo } from 'react'
import { useGetOptionsData } from '../api/query'
import { SearchLinkOptionKey } from '../api/type'

import SelectField, { SelectFieldProps } from '@form/select-field'
import { Skeleton } from '@ui/skeleton'

interface OptionsSelectorProps extends Omit<SelectFieldProps, "options"> {
    type: SearchLinkOptionKey
    excludeValues?: string[]
}


const OptionsSelector: React.FC<OptionsSelectorProps> = ({ type, excludeValues, value, label, ...props }) => {
    const { data, error, isLoading } = useGetOptionsData(type)

    const options = useMemo(() => {
        if(!data || !data.length) return []
        return data.map((item) => ({
            value: item.value,
            label: item.description !== '' ? item.description : item.value
        }))
        .filter((option) => {
            if (option.value === value) return true
            return !excludeValues?.includes(option.value)
        })
    }, [data, error, isLoading, excludeValues])


    if (isLoading) return <Skeleton className='h-16.5 w-full min-w-0 rounded-lg sm:min-w-80' />
    if (error) return (
        <div className='h-16.5 w-full min-w-0 rounded-lg bg-muted font-medium text-destructive flex items-center justify-center sm:min-w-80'>
            Unable to fetch {label || type}
        </div>
    )
    if (!data || !data.length) return (
        <div className='h-16.5 w-full min-w-0 rounded-lg bg-muted font-medium text-destructive flex items-center justify-center sm:min-w-80'>
            No {label || type} found
        </div>
    )


    return (
        <SelectField
            {...props}
            value={value}
            label={label}
            options={options}
            triggerClass='h-10! w-full min-w-0 sm:min-w-80'
            itemClass='h-10!'
        />
    )
}

export default OptionsSelector