import { useMutation } from "@tanstack/react-query";
import { MutationOptionsAPI } from "@/types/api-type";
import { MUTATION_REGISTRY } from "@constant/api-registrary";

import { LoginResponse } from "./type";
import { LoginFormType } from "../utils/schemas";
import { login } from "./api";


export const useLogin = (
    options?: MutationOptionsAPI<LoginResponse, LoginFormType>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.login],
        mutationFn: (payload) => login(payload),
        meta: {
            successMessage: "Login Successfully",
            errorMessage: "Login Failed",
        },
        ...options,
    });
};
