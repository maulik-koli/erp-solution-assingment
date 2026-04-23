import React from 'react'
import { Metadata } from 'next';
import LoginForm from '@modules/auth/components/login-form';
import LoginSideSection from '@modules/auth/components/login-side-sec';

export const metadata: Metadata = {
    title: 'Login | Sterling Cloud',
    description: 'Login to Sterling Cloud',
}


const LoginPage: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex bg-slate-50 dark:bg-background'>
            <div className='flex-1 flex flex-col items-center justify-center p-8'>
                <LoginForm />
            </div>
            <div className='flex-1 p-4 hidden lg:flex flex-col'>
                <LoginSideSection />
            </div>
        </div>
    )
}

export default LoginPage
