import React from 'react'
import { Metadata } from 'next';
import LoginForm from '@/components/auth/login-form';

export const metadata: Metadata = {
    title: 'Login | Sterling Cloud',
    description: 'Login to Sterling Cloud',
}


const LoginPage: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex'>
            <div className='w-full h-full flex items-center justify-center'>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage
