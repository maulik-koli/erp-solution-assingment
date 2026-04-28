'use client'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getTabFromField, vendorDefaultValue, VendorFormType, vendorSchema } from '../utils/schemas'
import { VendorTabs } from '../api/type'
import { useCreateVendor } from '../api/mutation'
import { useToast } from '@hooks/use-toast'
import { flatZodError } from '@lib/zod'

import { Card, CardContent } from '@ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'
import { DetailsSection, AccountSection, TaxSection, AddressSection } from '@modules/vendor/components/form-sections'
import { Button } from '@ui/button'

const DEFAULT_TAB: VendorTabs = "details"

const VENDOR_FORM_TABS: { label: string, value: VendorTabs }[] = [
    { label: 'Details', value: 'details' },
    { label: 'Tax', value: 'tax' },
    { label: 'Address & Contact', value: 'address' },
    { label: 'Accounting', value: 'account' },
]

interface VendorFormProps {
    onClose: (open: boolean) => void
}


const VendorForm: React.FC<VendorFormProps> = ({ onClose }) => {
    const form = useForm<VendorFormType>({
        resolver: zodResolver(vendorSchema),
        defaultValues: vendorDefaultValue
    });
    const { handleSubmit, getValues, formState: { errors } } = form;
    
    const { mutate, isPending } = useCreateVendor()
    const toast = useToast();

    const onSubmit = (data: VendorFormType) => {
        console.log(data)
        mutate(data)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) return;

        const error = flatZodError(vendorSchema, getValues());
        if (!error) return;

        const tab = getTabFromField(error.field);

        const tabLabel =
            VENDOR_FORM_TABS.find((t) => t.value === tab)?.label || "";

        toast.error(
            `Error in ${tabLabel} tab`,
            error.message
        );
    }, [errors]);

    toast.isLoading(isPending, "Creating vendor...");


    return (
        <Card>
            <CardContent>
                <Tabs  defaultValue={DEFAULT_TAB}>
                    <TabsList variant="line">
                        {VENDOR_FORM_TABS.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <FormProvider {...form}>
                        <form id='vendor-form' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <React.Fragment>
                                    <TabsContent value='details' ><DetailsSection /></TabsContent>
                                    <TabsContent value='tax' ><TaxSection /></TabsContent>
                                    <TabsContent value='address' ><AddressSection /></TabsContent>
                                    <TabsContent value='account' ><AccountSection /></TabsContent>
                                </React.Fragment>
                            </div>
                        </form>
                    </FormProvider>
                </Tabs>
                <div className='w-full flex justify-end items-center gap-3 mt-4'>
                    <Button
                        variant="outline"
                        onClick={() => onClose(false)}
                        size='lg'
                        
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        form='vendor-form'
                        size='lg'
                    >
                        Save
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default VendorForm