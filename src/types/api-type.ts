import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

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

export type QueryOptions<T> = Omit<
    UseQueryOptions<ApiResponse<T>, ApiError>,
    "queryKey" | "queryFn"
>;

export type QueryOptionsAPI<T> = Omit<
    UseQueryOptions<T, ApiError>,
    "queryKey" | "queryFn"
>;

export type MutationOptions<TData, TVariables> = Omit<
    UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>,
    "mutationFn" | "mutationKey"
>;

export type MutationOptionsAPI<TData, TVariables> = Omit<
    UseMutationOptions<TData, ApiError, TVariables>,
    "mutationFn" | "mutationKey"
>;