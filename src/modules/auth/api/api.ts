import api from "@lib/axios";
import { LoginFormType } from "../utils/schemas";
import { LoginResponse, LoginApiPayload } from "./type";


export const login = async (payload: LoginFormType): Promise<LoginResponse> => {
    const apiPayload: LoginApiPayload = {
        cmd: "login",
        ...payload,
    }

    const res = await api.post('/login', new URLSearchParams(apiPayload));
    return res.data;
}