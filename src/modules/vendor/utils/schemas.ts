import z from "zod";
import { SUPPLIER_TYPES } from "@constant/select-options";
import { VendorMutateType } from "../api/type";


export const vendorSchema = (action: VendorMutateType) =>
    z.object({
        // Details
        supplier_name: z.string().trim().min(1, "Supplier name is required").max(30, "Supplier name cannot exceed 30 characters"),
        supplier_group: z.string().min(1, "Supplier group is required"),
        country: z.string().trim().min(1, "Country is required").max(30, "Country cannot exceed 30 characters"),
        supplier_type: z.enum(SUPPLIER_TYPES, { error: "Invalid supplier type" }),
        is_transporter: z.number().min(0).max(1),
        default_currency: z.string().min(1, "Billing currency is required"),
        is_internal_supplier: z.number().min(0).max(1),
        default_price_list: z.string(),
        default_bank_account: z.string(),

        // Tax
        tax_id: z.string().min(4, "Tax id cannot be less than 4 digits").max(12, "Tax id cannot exceed 12 digits"),
        tax_category: z.string(),
        tax_withholding_category: z.string(),
        // Address
        supplier_primary_address: z.string(),
        supplier_primary_contact: z.string().min(1, "Primary contact is required"),
        // Accounting
        companies: z.array(z.string().min(1, "Invalid company detail")),
        accounts: z.array(z.string().min(1, "Invalid account detail")),
    })
    .superRefine((data, ctx) => {
        if (action === "create") {
            if (!data.default_price_list || data.default_price_list.length < 1) {
                ctx.addIssue({ code: 'custom', path: ["default_price_list"], message: "Price list is required" });
            }
            if (!data.default_bank_account || data.default_bank_account.length < 1) {
                ctx.addIssue({ code: 'custom', path: ["default_bank_account"], message: "Bank account is required" });
            }
            if (!data.tax_category || data.tax_category.length < 1) {
                ctx.addIssue({ code: 'custom', path: ["tax_category"], message: "Tax category is required" });
            }
            if (!data.tax_withholding_category || data.tax_withholding_category.length < 1) {
                ctx.addIssue({ code: 'custom', path: ["tax_withholding_category"], message: "Tax withholding category is required" });
            }
            if (!data.supplier_primary_address || data.supplier_primary_address.length < 1) {
                ctx.addIssue({ code: 'custom', path: ["supplier_primary_address"], message: "Primary address is required" });
            }
        }
    });

export type VendorFormType = z.infer<ReturnType<typeof vendorSchema>>;



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