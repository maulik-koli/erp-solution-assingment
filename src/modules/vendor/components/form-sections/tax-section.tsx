import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { VendorFormType } from '@modules/vendor/utils/schemas';

import Input from '@form/input';
import OptionsSelector from '../optoins-selector';


const TaxSection: React.FC = () => {
    const { control } = useFormContext<VendorFormType>();
    
    
    return (
        <div className='grid grid-cols-2 gap-6 py-6 px-2 overflow-y-auto'>
            <Controller
                name='tax_id'
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        type='text'
                        label='Tax ID'
                        placeholder='Enter Tax ID'
                        className='h-10 min-w-80'
                    />
                )}
            />
            <Controller
                name='tax_category'
                control={control}
                render={({ field }) => (
                    <OptionsSelector
                        type='tax_category' 
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Select Tax Category'
                        label='Tax Category'
                    />
                )}
            />
            <div />
            <Controller
                name='tax_withholding_category'
                control={control}
                render={({ field }) => (
                    <OptionsSelector
                        type='tax_withholding_category' 
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Select Tax Withholding Category'
                        label='Tax Withholding Category'
                    />
                )}
            />
        </div>
    )
}

export default TaxSection