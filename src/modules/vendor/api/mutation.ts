import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationOptionsAPI } from "@/types/api-type";
import { MUTATION_REGISTRY, QUERY_REGISTRY } from "@constant/api-registrary";

import { MutateVendorResponse, CreateVendorPayload, UpdateVendorPayload } from "./type";
import { mutateVendor } from "./api";


export const useSubmitVendor = (
    options?: MutationOptionsAPI<MutateVendorResponse, CreateVendorPayload | UpdateVendorPayload>
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [MUTATION_REGISTRY.mutateVendor],
        mutationFn: (payload) => mutateVendor(payload),
        meta: {
            successMessage: "Vendor Created Successfully",
            errorMessage: "Vendor Creation Failed",
        },
        onSuccess: (_, payload) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_REGISTRY.getVendorList] });
        },
        ...options,
    });
};