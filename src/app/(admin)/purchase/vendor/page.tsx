import React from 'react'
import VendorCards from '@modules/vendor/components/vendor-cards'
import VendorContent from '@modules/vendor/components/vendor-content'


const VendorPage: React.FC = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div>
                <h1 className="text-3xl font-semibold text-foreground">Vendor Management</h1>
                <p className="mt-1 text-base font-normal text-muted-foreground">
                    Manage and control all vendor operations
                </p>
            </div>
            <VendorCards />
            <VendorContent />
        </div>
    )
}

export default VendorPage