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
import Input from '@form/input'


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

    toast.isLoading(isPending, "Login...")


    return (
        <Card className="w-full max-w-sm px-2 py-6">
            <CardHeader className='flex flex-col items-center'>
                <CardTitle className="text-xl font-semibold">
                    Login to <span className="text-primary">Sterling Cloud</span>
                </CardTitle>
                <CardDescription className=''>
                    Let&apos;s login into your account first
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
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
                        <Button type="submit" disabled={isPending}>
                            Login
                        </Button>
                        <span className="text-center text-sm text-muted-foreground">
                            Don&apos;t have an account? <a href="#" className="text-primary">Sign up</a>
                        </span>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginForm
