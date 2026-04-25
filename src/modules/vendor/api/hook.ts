import { useQuery } from "@tanstack/react-query";
import { getVendorCount, getVendorList } from "./api";
import { VendorListParams, VendorsListResponse } from "./type";
import { QueryOptionsAPI } from "@/types/api-type";
import { QUERY_REGISTRY } from "@constant/api-registrary";

export const useGetVendorList = (
    params: VendorListParams,
    options?: QueryOptionsAPI<VendorsListResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.getVendorList, params],
        queryFn: () => getVendorList(params),
        retry: false,
        ...options,
    });
};

export const useGetVendorCount = (
    options?: QueryOptionsAPI<number>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.getVendorCount],
        queryFn: () => getVendorCount(),
        retry: false,
        ...options,
    });
};