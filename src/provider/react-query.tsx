'use client'
import React from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showToast } from '@lib/sonner-toast';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: any, query) => {
            console.log('Query Error:', {error, query});
            showToast.error(error?.message || 'Unable to fetch data');
        },
    }),

    mutationCache: new MutationCache({
        onSuccess: (_data, _variables, _context, mutation) => {
            showToast.success(mutation.meta?.successMessage as string);
        },
        onError: (error: any, _variables, _context, mutation) => {
            if (!error?.message) {
                return showToast.error(mutation.meta?.errorMessage as string);
            }
            showToast.error(error?.message as string);
        },
    }),

    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            // staleTime: 1000 * 60 * 5,
            // gcTime: 1000 * 60 * 10,
        },
        mutations: {
            retry: false,
        },
    },
})


const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider