import z from "zod";
import { SUPPLIER_TYPES } from "@constant/select-options";


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