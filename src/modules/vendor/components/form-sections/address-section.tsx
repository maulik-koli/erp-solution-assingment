import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { VendorFormType } from '@modules/vendor/utils/schemas';
import { VendorMutateType } from '@modules/vendor/api/type';
import OptionsSelector from '../optoins-selector';

interface AddressSectionProps {
    action: VendorMutateType
}


const AddressSection: React.FC<AddressSectionProps> = ({ action }) => {
    const { control } = useFormContext<VendorFormType>();

    return (
        <div className='flex flex-col gap-6 py-4 px-1 sm:py-6 sm:px-2 overflow-y-auto min-w-0'>
            <p className='font-semibold text-base'>Primary Address and Contact</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
                <Controller
                    name='supplier_primary_address'
                    control={control}
                    render={({ field, fieldState }) => (
                        <OptionsSelector
                            type='vendor_addresses'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='Select Supplier Primary Address'
                            label='Supplier Primary Address'
                            description='Reselect, if the chosen address is edited after save'
                            errorMessage={fieldState.error?.message}
                            disabled={action === "update"}
                        />
                    )}
                />
                <Controller
                    name='supplier_primary_contact'
                    control={control}
                    render={({ field, fieldState }) => (
                        <OptionsSelector
                            type='vendor_contact'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='Select Supplier Primary Contact'
                            label='Supplier Primary Contact'
                            description='Reselect, if the chosen contact is edited after save'
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default AddressSection