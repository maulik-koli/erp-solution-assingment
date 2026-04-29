import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { VendorFormType } from '@modules/vendor/utils/schemas';
import { VendorMutateType } from '@modules/vendor/api/type';
import { SUPPLIER_TYPES_OPTIONS } from '@constant/select-options';

import OptionsSelector from '../optoins-selector';
import { Input, SelectField, Checkbox, Switch } from '@form/index';

interface DetailsSectionProps {
    action: VendorMutateType
}


const DetailsSection: React.FC<DetailsSectionProps> = ({ action }) => {
    const { control } = useFormContext<VendorFormType>();

    return (
        <div className='flex flex-col py-6 px-2 overflow-y-auto'>
            <div className='grid grid-cols-2 gap-6'>
                <Controller
                    name='supplier_name'
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            {...field}
                            type='text'
                            label='Supplier Name'
                            placeholder='Enter Supplier Name'
                            className='h-10 min-w-80'
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name='supplier_group'
                    control={control}
                    render={({ field, fieldState }) => (
                        <OptionsSelector
                            type='supplier_group' 
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='Select Supplier Group'
                            label='Supplier Group'
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name='country'
                    control={control}
                    render={({ field, fieldState}) => (
                        <Input
                            {...field}
                            type='text'
                            label='Country'
                            placeholder='Enter Country'
                            className='h-10 min-w-80'
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name='supplier_type'
                    control={control}
                    render={({ field, fieldState }) => (
                        <SelectField 
                            value={field.value}
                            onChange={field.onChange}
                            options={SUPPLIER_TYPES_OPTIONS}
                            placeholder='Select Supplier Type'
                            label='Supplier Type'
                            triggerClass='h-10! min-w-80'
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />
            </div>
            <div className='mt-3 grid grid-cols-2 gap-x-6'>
                <div />
                <Controller
                    name='is_transporter'
                    control={control}
                    render={({ field }) => (
                        <Checkbox 
                            checked={field.value === 1 ? true : false}
                            onCheckedChange={(value) => field.onChange(value ? 1 : 0)}
                            label='Is Transporter?'
                        />
                    )}
                />
            </div>
            <div className='flex flex-col gap-6'>
                <p className="text-base font-semibold">Defaults</p>
                <div className="grid grid-cols-2 gap-6">
                    <Controller
                        name='default_currency'
                        control={control}
                        render={({ field, fieldState }) => (
                            <OptionsSelector
                                type='currency' 
                                value={field.value}
                                onChange={field.onChange}
                                placeholder='Select Billing Currency'
                                label='Billing Currency'
                                errorMessage={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name='default_price_list'
                        control={control}
                        render={({ field, fieldState }) => (
                            <OptionsSelector
                                type='price_list' 
                                value={field.value}
                                onChange={field.onChange}
                                placeholder='Select Price List'
                                label='Price List'
                                errorMessage={fieldState.error?.message}
                                disabled={action === "update"}
                            />
                        )}
                    />
                    <Controller
                        name='default_bank_account'
                        control={control}
                        render={({ field, fieldState }) => (
                            <OptionsSelector
                                type='bank_account' 
                                value={field.value}
                                onChange={field.onChange}
                                placeholder='Select Company Bank Account'
                                label='Default Company Bank Account'
                                errorMessage={fieldState.error?.message}
                                disabled={action === "update"}
                            />
                        )}
                    />
                    <div />
                    <Controller
                        name='is_internal_supplier'
                        control={control}
                        render={({ field }) => (
                            <div className='bg-muted-foreground/5 rounded-lg p-3'>
                                <Switch
                                    checked={field.value === 1 ? true : false}
                                    onCheckedChange={(value) => field.onChange(value ? 1 : 0)}
                                    label="Internal Supplier"
                                    description='Identify this supplier as an internal entity within your organization.'
                                    defaultChecked 
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsSection