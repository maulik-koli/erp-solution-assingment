import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { VendorFormType } from '@modules/vendor/utils/schemas';
import OptionsSelector from '../optoins-selector';


const AddressSection: React.FC = () => {
    const { control } = useFormContext<VendorFormType>();

    return (
        <div className='flex flex-col gap-6 py-6 px-2 overflow-y-auto'>
            <p className='font-semibold text-base'>Primary Address and Contact</p>
            <div className='grid grid-cols-2 gap-6'>
                <Controller
                    name='supplier_primary_address'
                    control={control}
                    render={({ field }) => (
                        <OptionsSelector
                            type='vendor_addresses'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='Select Supplier Primary Address'
                            label='Supplier Primary Address'
                            description='Reselect, if the chosen address is edited after save'
                        />
                    )}
                />
                <Controller
                    name='supplier_primary_contact'
                    control={control}
                    render={({ field }) => (
                        <OptionsSelector
                            type='vendor_contact'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='Select Supplier Primary Contact'
                            label='Supplier Primary Contact'
                            description='Reselect, if the chosen contact is edited after save'
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default AddressSection