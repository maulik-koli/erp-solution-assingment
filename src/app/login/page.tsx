import React from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next';
import LoginFormSkeleton from '@modules/auth/components/login-form-skeleton';
import LoginSideSection from '@modules/auth/components/login-side-sec';

const LoginForm = dynamic(
    () => import('@modules/auth/components/login-form'),
    {
        loading: () => <LoginFormSkeleton />,
    },
)

export const metadata: Metadata = {
    title: 'Login | Sterling Cloud',
    description: 'Login to Sterling Cloud',
}


const LoginPage: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-background overflow-hidden'>
            <div className='flex w-full flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
                <LoginForm />
            </div>
            <div className='hidden w-full flex-1 flex-col p-4 lg:flex'>
                <LoginSideSection />
            </div>
        </div>
    )
}

export default LoginPage
