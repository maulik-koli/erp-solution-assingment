import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { VendorFormType } from '@modules/vendor/utils/schemas';
import { VendorMutateType } from '@modules/vendor/api/type';

import Input from '@form/input';
import OptionsSelector from '../optoins-selector';

interface TaxSectionProps {
    action: VendorMutateType
}


const TaxSection: React.FC<TaxSectionProps> = ({ action }) => {
    const { control } = useFormContext<VendorFormType>();
    
    
    return (
        <div className='grid grid-cols-1 gap-4 py-4 px-1 sm:py-6 sm:px-2 md:grid-cols-2 md:gap-6 overflow-y-auto min-w-0'>
            <Controller
                name='tax_id'
                control={control}
                render={({ field, fieldState }) => (
                    <Input
                        {...field}
                        type='text'
                        label='Tax ID'
                        placeholder='Enter Tax ID'
                        className='h-10 w-full min-w-0 sm:min-w-80'
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />
            <Controller
                name='tax_category'
                control={control}
                render={({ field, fieldState }) => (
                    <OptionsSelector
                        type='tax_category' 
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Select Tax Category'
                        label='Tax Category'
                        errorMessage={fieldState.error?.message}
                        disabled={action === "update"}
                    />
                )}
            />
            <div className='hidden md:block' />
            <Controller
                name='tax_withholding_category'
                control={control}
                render={({ field, fieldState }) => (
                    <OptionsSelector
                        type='tax_withholding_category' 
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Select Tax Withholding Category'
                        label='Tax Withholding Category'
                        errorMessage={fieldState.error?.message}
                        disabled={action === "update"}
                    />
                )}
            />
        </div>
    )
}

export default TaxSection