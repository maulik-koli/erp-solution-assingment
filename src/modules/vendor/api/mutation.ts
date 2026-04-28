import { useMutation } from "@tanstack/react-query";
import { MutationOptionsAPI } from "@/types/api-type";
import { MUTATION_REGISTRY } from "@constant/api-registrary";
import { CreateSupplierResponse } from "./type";
import { VendorFormType } from "../utils/schemas";
import { createVendor } from "./api";

export const useCreateVendor = (
    options?: MutationOptionsAPI<CreateSupplierResponse, VendorFormType>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.createVendor],
        mutationFn: (payload) => createVendor(payload),
        meta: {
            successMessage: "Vendor Created Successfully",
            errorMessage: "Vendor Creation Failed",
        },
        ...options,
    });
};