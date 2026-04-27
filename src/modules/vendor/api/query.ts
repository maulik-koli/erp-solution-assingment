import { useQuery } from "@tanstack/react-query";
import { QueryOptionsAPI } from "@/types/api-type";
import { QUERY_REGISTRY } from "@constant/api-registrary";

import { getOptionsData, getVendorCount, getVendorList } from "./api";
import { OptionsItemsResponse, SearchLinkOptionKey, VendorListParams, VendorsListResponse } from "./type";


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


export const useGetOptionsData = (
    key: SearchLinkOptionKey,
    options?: QueryOptionsAPI<OptionsItemsResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.getOptionsData, key],
        queryFn: () => getOptionsData(key),
        retry: false,
        ...options,
    });
};