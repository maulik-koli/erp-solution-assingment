import { useMutation } from "@tanstack/react-query";
import { MutationOptionsAPI } from "@/types/api-type";
import { MUTATION_REGISTRY } from "@constant/api-registrary";

import { LoginResponse, LogoutResponse } from "./type";
import { LoginFormType } from "../utils/schemas";
import { login, logout } from "./api";


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


export const useLogout = (
    options?: MutationOptionsAPI<LogoutResponse, void>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.logout],
        mutationFn: () => logout(),
        meta: {
            successMessage: "Logout Successfully",
            errorMessage: "Logout Failed",
        },
        ...options,
    });
};
