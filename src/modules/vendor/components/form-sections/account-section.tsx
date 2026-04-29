import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { VendorFormType } from '@modules/vendor/utils/schemas';
import { SearchLinkOptionKey } from '@modules/vendor/api/type';

import OptionsSelector from '../optoins-selector';
import Icon from '@components/icons';
import { Button } from '@ui/button';
import { cn, Log } from '@lib/utils';


const AccountSection: React.FC = () => {
    const { control, formState: { errors }  } = useFormContext<VendorFormType>();

    const hasCompanyError =
        Array.isArray(errors.companies) &&
        errors.companies.some((err) => err?.message);

    const hadAccountError = 
        Array.isArray(errors.accounts) &&
        errors.accounts.some((err) => err?.message);


    return (
        <div className='flex flex-col gap-6 py-4 px-1 sm:py-6 sm:px-2 overflow-y-auto min-w-0'>
            <p className='font-semibold text-base'>Default Accounts</p>
            <p className='font-medium text-sm'>Mention if non-standars payable account</p>

            <div className='grid grid-cols-1 border rounded-xl overflow-hidden md:grid-cols-2'>
                <Controller
                    name="companies"
                    control={control}
                    render={({ field }) => (
                        <ListComponent
                            label="Company"
                            type="company"
                            value={field.value || []}
                            onChange={field.onChange}
                            isError={hasCompanyError}
                        />
                    )}
                />
                <Controller
                    name="accounts"
                    control={control}
                    render={({ field }) => (
                        <ListComponent
                            label="Default Account"
                            type="default_account"
                            value={field.value || []}
                            onChange={field.onChange}
                            isError={hadAccountError}
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default AccountSection



interface ListComponentProps {
    label: string
    type: SearchLinkOptionKey
    value: string[]
    onChange: (value: string[]) => void
    isError?: boolean
}

const ListComponent: React.FC<ListComponentProps> = ({ onChange, value, label, isError, type }) => {
    const onAdd = () => {
        onChange([...(value || []), ""])
    }

    const onRemove = (index: number) => {
        const updated = value.filter((_, i) => i !== index)
        onChange(updated)
    }

    const onSelectChange = (val: string, index: number) => {
        const updated = [...value]
        updated[index] = val
        onChange(updated)
    }


    return (
        <div className='flex flex-col border-b last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0'>
            <div className='px-4 py-3 font-medium text-sm border-b bg-muted/30'>
                {label}
            </div>

            <div className={cn('flex flex-col gap-2 p-3', )}>
                {value?.length > 0 ? (
                    value.map((val, index) => (
                        <div 
                            key={index}
                            className={cn(
                                'flex items-center gap-2',
                                isError && !val  && 'outline-2 outline-destructive/70 rounded-lg'
                            )}
                        >
                            <div className='flex-1'>
                                <OptionsSelector
                                    type={type}
                                    value={val}
                                    excludeValues={value}
                                    placeholder={`Select ${label}`}
                                    onChange={(v) => onSelectChange(v, index)}
                                />
                            </div>

                            <Button
                                type="button"
                                size="icon"
                                variant="outline"
                                onClick={() => onRemove(index)}
                            >
                                <Icon name='Trash2' className='size-4' />
                            </Button>
                        </div>
                    ))
                ) : (
                    <p className='text-sm text-muted-foreground'>
                        No items added
                    </p>
                )}
            </div>

            <div className='p-3 pt-0'>
                <Button
                    type="button"
                    variant="outline"
                    className='w-full'
                    onClick={onAdd}
                >
                    <Icon name='Plus' className='size-4' /> Add {label}
                </Button>
            </div>
        </div>
    )
}