import { CreateVendorPayload, UpdateVendorPayload, VendorListItem, VendorMutateType, VendorTabs } from "../api/type";
import { VendorFormType } from "./schemas";


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



const toStr = (v: string | null | undefined) => v ?? "";

export const convertDataToFormData = (
    data: VendorListItem
): VendorFormType => {
    return {
        supplier_name: toStr(data.supplier_name),
        supplier_group: toStr(data.supplier_group),
        country: toStr(data.country),
        supplier_type: data.supplier_type as VendorFormType["supplier_type"],
        is_transporter: data.is_transporter ?? 0,
        default_currency: toStr(data.default_currency),
        default_price_list: toStr(data.default_price_list),
        default_bank_account: toStr(data.default_bank_account),
        is_internal_supplier: data.is_internal_supplier ?? 0,

        tax_id: toStr(data.tax_id),
        tax_category: toStr(data.tax_category),
        tax_withholding_category: toStr(data.tax_withholding_category),

        supplier_primary_address: toStr(data.supplier_primary_address),
        supplier_primary_contact: toStr(data.supplier_primary_contact),

        // companies: toArr(data.companies),
        // accounts: toArr(data.accounts),

        // Note: we are not getting companies and accounts details in list API, so we have to leave it empty and handle it separately in form
        companies: [],
        accounts: [],
    };
};



export const convertFormDataToPayload = (
    formData: VendorFormType,
    action: VendorMutateType,
    data: VendorListItem | null = null
): CreateVendorPayload | UpdateVendorPayload => {
    if (action === "create") {
        return {
            doc: {
                ...formData,
                doctype: "Supplier",
                __unsaved: 1,
                companies: formData.companies.map((c: string) => ({ company: c, doctype: "Supplier Company" })),
                accounts: formData.accounts.map((a: string) => ({ account: a, doctype: "Supplier Account" })),
            },
            action: "Save",
        };
    }

    if (!data) throw new Error("Update requires existing vendor data");
    
    return {
        doc: {
            doctype: "Supplier",
            name: data.name,
            modified: data.modified,
            creation: data.creation,

            owner: data.owner,
            modified_by: data.modified_by,
            docstatus: data.docstatus,
            idx: data.idx,
            naming_series: data.naming_series,
            disabled: data.disabled,

            represents_company: data.represents_company ?? "",
            supplier_details: data.supplier_details ?? "",
            website: data.website ?? "",
            language: data.language ?? "",

            allow_purchase_invoice_creation_without_purchase_order:
                data.allow_purchase_invoice_creation_without_purchase_order ?? 0,
            allow_purchase_invoice_creation_without_purchase_receipt:
                data.allow_purchase_invoice_creation_without_purchase_receipt ?? 0,
            is_frozen: data.is_frozen ?? 0,
            warn_rfqs: data.warn_rfqs ?? 0,
            warn_pos: data.warn_pos ?? 0,
            prevent_rfqs: data.prevent_rfqs ?? 0,
            prevent_pos: data.prevent_pos ?? 0,
            on_hold: data.on_hold ?? 0,
            hold_type: data.hold_type ?? "",

            portal_users: [],

            __onload: {
                addr_list: [],
                contact_list: [],
                dashboard_info: [],
            },

            __unsaved: 0,

            // ---------------- FORM (OVERRIDE VALUES)
            supplier_name: formData.supplier_name,
            supplier_group: formData.supplier_group,
            country: formData.country,
            supplier_type: formData.supplier_type,
            is_transporter: formData.is_transporter,
            default_currency: formData.default_currency,
            default_price_list: formData.default_price_list,
            default_bank_account: formData.default_bank_account,
            is_internal_supplier: formData.is_internal_supplier,

            tax_id: formData.tax_id,
            tax_category: formData.tax_category,
            tax_withholding_category: formData.tax_withholding_category,

            supplier_primary_address: formData.supplier_primary_address,
            supplier_primary_contact: formData.supplier_primary_contact,

            companies: formData.companies.map((c: string) => ({
                company: c,
                doctype: "Supplier Company",
            })),
            accounts: formData.accounts.map((a: string) => ({
                account: a,
                doctype: "Supplier Account",
            })),
        },
        action: "Save",
    };
}