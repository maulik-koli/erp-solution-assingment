import api from "@lib/axios";
import { LoginFormType } from "../utils/schemas";
import { LoginResponse, LoginApiPayload, LogoutResponse } from "./type";


export const login = async (payload: LoginFormType): Promise<LoginResponse> => {
    const apiPayload: LoginApiPayload = {
        cmd: "login",
        ...payload,
    }

    const res = await api.post('/login', new URLSearchParams(apiPayload));
    return res.data;
}


export const logout = async (): Promise<LogoutResponse> => {
    const res = await api.post('/api/method/logout');
    return res.data;
}