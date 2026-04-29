"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from '../api/mutation'
import { useToast } from '@hooks/use-toast'
import { DEFAULT_ROUTE } from '@constant/nav-routes'
import { defaultLoginFormValue, LoginFormType, loginSchema } from '../utils/schemas'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@ui/card"
import { Button } from '@ui/button'
import { FieldSeparator } from '@ui/field'
import Input from '@form/input'
import Icon from '@components/icons'


const LoginForm: React.FC = () => {
    const form = useForm<LoginFormType>({
        defaultValues: defaultLoginFormValue,
        resolver: zodResolver(loginSchema),
    })
    const router = useRouter();
    const toast = useToast();
    const { mutate, isPending } = useLogin();

    const onSubmit = (data: LoginFormType) => {
        mutate(data, {
            onSuccess: () => {
                router.push(DEFAULT_ROUTE);
            }
        })
    }

    const toastMessage = () => {
        toast.info("This feature is not available yet.")
    }

    toast.isLoading(isPending, "Login...")


    return (
        <Card className="w-full max-w-md px-3 py-6 sm:px-4">
            <CardHeader className='flex flex-col items-center px-0 text-center sm:px-6'>
                <CardTitle className="text-lg font-semibold sm:text-xl">
                    Login to <span className="text-primary">Sterling Cloud</span>
                </CardTitle>
                <CardDescription className='text-sm sm:text-base'>
                    Let&apos;s login into your account first
                </CardDescription>
            </CardHeader>
            <CardContent className='px-0 sm:px-6'>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5 sm:gap-6">
                        <Controller
                            control={form.control}
                            name='usr'
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="username"
                                    type="text"
                                    label='Username *'
                                    placeholder="Enter Username"
                                    leftIcon='User'
                                    required
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='pwd'
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    id="password"
                                    type="password"
                                    label='Password *'
                                    leftIcon='LockKeyhole'
                                    placeholder='Enter Password'
                                    errorMessage={fieldState.error?.message}
                                    required
                                />
                            )}
                        />
                        <Button type="submit" size='lg' disabled={isPending}>
                            Login
                        </Button>
                        <FieldSeparator>Or Sign in with</FieldSeparator>
                        <div className='flex w-full flex-col gap-3 sm:flex-row sm:gap-2'>
                            <Button variant='outline' type='button' className='w-full h-11 flex items-center justify-center gap-3 sm:flex-1 hover:bg-secondary transition-colors' onClick={toastMessage}>
                                <Icon name='google' className='size-5' />
                                <span className='text-sm font-medium'>Google</span>
                            </Button>
                            <Button variant='outline' type='button' className='w-full h-11 flex items-center justify-center gap-3 sm:flex-1 hover:bg-secondary transition-colors' onClick={toastMessage}>
                                <Icon name='facebook' className='size-5' />
                                <span className='text-sm font-medium'>Facebook</span>
                            </Button>
                        </div>
                        <div className="text-center text-xs text-muted-foreground sm:text-sm">
                            Don&apos;t have an account? <span onClick={toastMessage} className="text-primary cursor-pointer">Sign up</span>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginForm
