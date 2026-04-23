import { UseMutationOptions } from "@tanstack/react-query";

export type ApiResponse<T> = {
    message: T;
}

export type ApiError = {
    message?: string;
    exception?: string;
    exc_type?: string;
    exc?: string;
    _server_messages?: string;
}

export type MutationOptions<TData, TVariables> = Omit<
    UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>,
    "mutationFn" | "mutationKey"
>;

export type MutationOptionsAPI<TData, TVariables> = Omit<
    UseMutationOptions<TData, ApiError, TVariables>,
    "mutationFn" | "mutationKey"
>;