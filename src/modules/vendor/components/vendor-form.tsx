import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VendorFormType, vendorSchema } from '../utils/schemas'
import { VendorTabs } from '../api/type'

import { Card, CardContent } from '@ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'
import { DetailsSection, AccountSection, TaxSection, AddressSection } from '@modules/vendor/components/form-sections'

const DEFAULT_TAB: VendorTabs = "details"

const VENDOR_FORM_TABS: { label: string, value: VendorTabs }[] = [
    { label: 'Details', value: 'details' },
    { label: 'Tax', value: 'tax' },
    { label: 'Address & Contact', value: 'address' },
    { label: 'Accounting', value: 'account' },
]


const VendorForm: React.FC = () => {
    const form = useForm<VendorFormType>({
        resolver: zodResolver(vendorSchema)
    });
    const { handleSubmit, formState: { errors } } = form;

    const handleSubmitData = (data: VendorFormType) => {
        console.log(data)
    }


    return (
        <Card>
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
                        <form onSubmit={handleSubmit(handleSubmitData)}>
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
            </CardContent>
        </Card>
    )
}

export default VendorForm