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


    if (isLoading) return <Skeleton className='h-16.5 min-w-80 rounded-lg' />
    if (error) return (
        <div className='h-16.5 min-w-80 rounded-lg bg-muted text-destructive font-medium flex items-center justify-center'>
            Unable to fetch {label || type}
        </div>
    )
    if (!data || !data.length) return (
        <div className='h-16.5 min-w-80 rounded-lg bg-muted text-destructive font-medium flex items-center justify-center'>
            No {label || type} found
        </div>
    )


    return (
        <SelectField
            {...props}
            value={value}
            label={label}
            options={[...options, { value: "test value", label: "test value" }]}
            triggerClass='h-10! min-w-80'
            itemClass='h-10!'
        />
    )
}

export default OptionsSelector