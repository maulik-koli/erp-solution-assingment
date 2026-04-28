import z from "zod";
import { SUPPLIER_TYPES } from "@constant/select-options";
import { VendorTabs } from "../api/type";


export const vendorSchema = z.object({
    // Details
    supplier_name: z
        .string()
        .trim()
        .min(1, "Supplier name is required")
        .max(30, "Supplier name cannot exceed 30 characters"),
    supplier_group: z.string().min(1, "Supplier group is required"),
    country: z
        .string()
        .trim()
        .min(1, "Country is required")
        .max(30, "Country cannot exceed 30 characters"),
    supplier_type: z.enum(SUPPLIER_TYPES, "Invalid supplier type"),
    is_transporter: z.number().min(0).max(1),
    default_currency: z.string().min(1, "Billing currency is required"),
    default_price_list: z.string().min(1, "Price list is required"),
    default_bank_account: z.string().min(1, "Bank account is required"),
    is_internal_supplier: z.number().min(0).max(1),

    // Tax
    tax_id: z
        .string()
        .min(4, "Tax id cannot be less than 4 digits")
        .max(12, "Tax id cannot exceed 12 digits"),
    tax_category: z.string().min(1, "Tax category is required"),
    tax_withholding_category: z.string().min(1, "Tax withholding category is required"),

    // Address & Contact
    supplier_primary_address: z.string().min(1, "Primary addres is required"),
    supplier_primary_contact: z.string().min(1, "Primary contact is required"),

    // Accounting
    companies: z.array(z.string().min(1, "Invalid company detail")),
    accounts: z.array(z.string().min(1, "Invalid acoount detail")),
    // payment_terms: z.string().min(1, "Payment terms is required"),
})

export type VendorFormType = z.infer<typeof vendorSchema>;



export const vendorDefaultValue: VendorFormType = {
    supplier_name: "",
    supplier_group: "",
    country: "",
    supplier_type: "Company",
    is_transporter: 0,
    default_currency: "",
    default_price_list: "",
    default_bank_account: "",
    is_internal_supplier: 1,
    tax_id: "",
    tax_category: "",
    tax_withholding_category: "",
    supplier_primary_address: "",
    supplier_primary_contact: "",
    companies: [],
    accounts: [],
}


export const TAB_FIELD_MAP: Record<VendorTabs, (keyof VendorFormType)[]> = {
    details: [
        "supplier_name",
        "supplier_group",
        "country",
        "supplier_type",
        "is_transporter",
        "default_currency",
        "default_price_list",
        "default_bank_account",
        "is_internal_supplier",
    ],
    tax: [
        "tax_id",
        "tax_category",
        "tax_withholding_category",
    ],
    address: [
        "supplier_primary_address",
        "supplier_primary_contact",
    ],
    account: [
        "companies",
        "accounts",
    ],
};

export const getTabFromField = (field?: string): VendorTabs | null => {
    if (!field) return null;

    return (
        Object.entries(TAB_FIELD_MAP).find(([_, fields]) =>
        fields.includes(field as keyof VendorFormType)
        )?.[0] as VendorTabs || null
    );
};