import { VendorStatus, SupplierType } from "@/types/enums";

type OptionsType<T> = {
    label: string,
    value: T
}[]

export const VENDOR_STATUS_OPTIONS: OptionsType<VendorStatus> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Disabled", value: "disabled" },
]


export const SUPPLIER_TYPES: SupplierType[] = ["Company", "Individual", "Partnership"] as const
export const SUPPLIER_TYPES_OPTIONS: OptionsType<SupplierType> = [
    { label: "Company", value: "Company" },
    { label: "Individual", value: "Individual" },
    { label: "Partnership", value: "Partnership" },
]