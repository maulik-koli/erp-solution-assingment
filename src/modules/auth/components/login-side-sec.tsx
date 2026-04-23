import React from 'react'
import Icon from '@/components/icons'
import { LOGIN_SIDE_SECTION_DATA } from '@/constant/static-data'


const LoginSideSection: React.FC = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between bg-primary rounded-2xl p-10'>
            <div className='flex-1 flex flex-col items-center justify-center gap-12'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-3xl text-center font-semibold text-primary-foreground'>
                        Vendor Operations Management
                    </h2>
                    <p className='text-sm max-w-[420px] text-center text-primary-foreground/80 leading-relaxed'>
                        Manage vendors, track payments, and streamline procurement processes within a unified enterprise platform.
                    </p>
                </div>
                
                <div className='w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {LOGIN_SIDE_SECTION_DATA.map((item, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col gap-5 p-6 rounded-[1.25rem] bg-primary-foreground/10 border border-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300'
                        >
                            <div className='w-12 h-12 rounded-2xl bg-primary-foreground flex items-center justify-center text-primary shrink-0 shadow-sm'>
                                <Icon name={item.icon} className='w-5 h-5' strokeWidth={2.5} />
                            </div>
                            <p className='text-sm text-primary-foreground/90 font-medium leading-relaxed'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-between items-center text-primary-foreground/70 text-xs w-full mt-8'>
                <p>© 2026 Sterling Cloud. All rights reserved.</p>
                <div className='flex items-center gap-3'>
                    <a href='#' className='hover:text-primary-foreground transition-colors'>Privacy Policy</a>
                    <span className='opacity-50 text-[10px]'>•</span>
                    <a href='#' className='hover:text-primary-foreground transition-colors'>Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default LoginSideSection
