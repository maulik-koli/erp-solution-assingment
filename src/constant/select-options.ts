import { SupplierType, VendorSort } from "@modules/vendor/api/type"

type OptionsType<T> = {
    label: string,
    value: T
}[]

export const VENDOR_SORT_OPTIONS: OptionsType<VendorSort> = [
    { label: "Last Modified (Newest)", value: "modified desc" },
    { label: "Last Modified (Oldest)", value: "modified asc" },
    { label: "Name (A → Z)", value: "supplier_name asc" },
    { label: "Name (Z → A)", value: "supplier_name desc" },
]


export const SUPPLIER_TYPES: SupplierType[] = ["Company", "Individual", "Partnership"] as const
export const SUPPLIER_TYPES_OPTIONS: OptionsType<SupplierType> = [
    { label: "Company", value: "Company" },
    { label: "Individual", value: "Individual" },
    { label: "Partnership", value: "Partnership" },
]