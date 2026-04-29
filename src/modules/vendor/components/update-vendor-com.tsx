'use client'
import React, { useState } from 'react'
import { VendorListItem } from '../api/type'

import DialogComponent from '@components/common/dialog-com'
import VendorForm from './vendor-form'
import Icon from '@components/icons'
import { Button } from '@ui/button'

interface UpdateVendorComponentProps {
    data: VendorListItem
}


const UpdateVendorComponent: React.FC<UpdateVendorComponentProps> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <DialogComponent
            trigger={
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5 px-3"
                >
                    <Icon name="PencilLine" className="h-3.5 w-3.5" />
                    Edit
                </Button>
            }
            open={open}
            onOpenChange={(op) => setOpen(op)}
            title="Update Supplier"
            description="Fill in the details below to update the vendor information."
            className='w-[calc(100vw-16rem)]'
        >
            <VendorForm onClose={setOpen} action='update' data={data} />
        </DialogComponent>
    )
}

export default UpdateVendorComponent
