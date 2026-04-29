'use client'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { vendorDefaultValue, VendorFormType, vendorSchema } from '../utils/schemas'
import { VendorListItem, VendorMutateType, VendorTabs } from '../api/type'
import { useSubmitVendor } from '../api/mutation'
import { useToast } from '@hooks/use-toast'
import { flatZodError } from '@lib/zod'

import { Card, CardContent } from '@ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'
import { DetailsSection, AccountSection, TaxSection, AddressSection } from '@modules/vendor/components/form-sections'
import { Button } from '@ui/button'
import { convertDataToFormData, convertFormDataToPayload, getTabFromField } from '../utils/helper'
import { Skeleton } from '@ui/skeleton'

const DEFAULT_TAB: VendorTabs = "details"

const VENDOR_FORM_TABS: { label: string, value: VendorTabs }[] = [
    { label: 'Details', value: 'details' },
    { label: 'Tax', value: 'tax' },
    { label: 'Address & Contact', value: 'address' },
    { label: 'Accounting', value: 'account' },
]

interface VendorFormProps {
    onClose: (open: boolean) => void
    action: VendorMutateType
    data: VendorListItem | null
}


const VendorForm: React.FC<VendorFormProps> = ({ onClose, action, data }) => {
    const activeSchema = React.useMemo(() => vendorSchema(action), [action]);

    const form = useForm<VendorFormType>({
        resolver: zodResolver(activeSchema),
        defaultValues: vendorDefaultValue,
    });
    const { handleSubmit, getValues, reset, formState: { errors } } = form;
    
    const [isHydrated, setIsHydrated] = React.useState(false);
    const { mutate, isPending } = useSubmitVendor()
    const toast = useToast();

    const onSubmit = (formData: VendorFormType) => {
        if (!isHydrated) return
        const payload = convertFormDataToPayload(formData, action, data);

        mutate(payload, {
            onSuccess: () => {
                onClose(false);
            }
        })
    }

    // for edit form to make component wait till it fill data
    useEffect(() => {
        if (!isHydrated) {
            reset(action === "create" ? vendorDefaultValue : convertDataToFormData(data as VendorListItem));
            setIsHydrated(true);
        }
    }, [isHydrated])

    useEffect(() => {
        if (!isHydrated) return
        if (Object.keys(errors).length === 0) return;

        const error = flatZodError(activeSchema, getValues());
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
            {!isHydrated ? (
                <Skeleton className='w-full h-52 rounded-md' />
            ) : (
                <CardContent>
                    <Tabs defaultValue={DEFAULT_TAB}>
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
                                        <TabsContent value='details' ><DetailsSection action={action} /></TabsContent>
                                        <TabsContent value='tax' ><TaxSection action={action} /></TabsContent>
                                        <TabsContent value='address' ><AddressSection action={action} /></TabsContent>
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
                            disabled={isPending || !isHydrated}
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            form='vendor-form'
                            size='lg'
                            disabled={isPending || !isHydrated}
                        >
                            Save
                        </Button>
                    </div>
                </CardContent>
            )}
        </Card>
    )
}

export default VendorForm