import { LoginFormType } from "../utils/schemas"

export type LoginResponse = {
    message: string,
    home_page: string,
    full_name: string
}

export type LoginApiPayload = LoginFormType & {
    cmd: "login"
}

export type LogoutResponse = {
    message: string,
    home_page: string,
    full_name: string
}