'use client'
import React from 'react'
import Icon from '@/components/icons'
import { LOGIN_SIDE_SECTION_DATA } from '@/constant/static-data'
import { useToast } from '@hooks/use-toast'


const LoginSideSection: React.FC = () => {
    const toast = useToast();

    const toastMessage = () => {
        toast.info("This page is not available yet.")
    }

    return (
        <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-primary p-6 sm:p-8 lg:p-10'>
            <div className='flex flex-1 flex-col items-center justify-center gap-8 lg:gap-12'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-2xl text-center font-semibold text-primary-foreground sm:text-3xl'>
                        Vendor Operations Management
                    </h2>
                    <p className='max-w-105 text-center text-sm leading-relaxed text-primary-foreground/80'>
                        Manage vendors, track payments, and streamline procurement processes within a unified enterprise platform.
                    </p>
                </div>
                
                <div className='grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
                    {LOGIN_SIDE_SECTION_DATA.map((item, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col gap-4 rounded-[1.25rem] border border-primary-foreground/10 bg-primary-foreground/10 p-5 transition-all duration-300 hover:bg-primary-foreground/20 sm:gap-5 sm:p-6'
                        >
                            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground text-primary shadow-sm'>
                                <Icon name={item.icon} className='w-5 h-5' strokeWidth={2.5} />
                            </div>
                            <p className='text-sm font-medium leading-relaxed text-primary-foreground/90'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-8 flex w-full flex-col items-start justify-between gap-3 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:gap-4'>
                <p>© 2026 Sterling Cloud. All rights reserved.</p>
                <div className='flex flex-wrap items-center gap-3'>
                    <p
                        onClick={toastMessage}
                        className='hover:text-primary-foreground transition-colors cursor-pointer'
                    >
                        Privacy Policy
                    </p>
                    <span className='opacity-50 text-[10px]'>•</span>
                    <p
                        onClick={toastMessage}
                        className='hover:text-primary-foreground transition-colors cursor-pointer'
                    >
                        Terms & Conditions
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSideSection
