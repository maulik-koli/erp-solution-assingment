import { useMutation } from "@tanstack/react-query";
import { MutationOptions, MutationOptionsAPI } from "@/types/api-type";
import { LoginApiPayload, LoginResponse } from "./type";
import { login } from "./api";
import { MUTATION_REGISTRY } from "@constant/mutation-registrary";
import { LoginFormType } from "../utils/schemas";


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
