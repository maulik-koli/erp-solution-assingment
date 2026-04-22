import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const LoginForm: React.FC = () => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className='justify-center'>
                <CardTitle>
                    Login to <span className="text-primary">Sterling Cloud</span>
                </CardTitle>
                <CardDescription>
                    Let&apos;os login into your account first
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default LoginForm
