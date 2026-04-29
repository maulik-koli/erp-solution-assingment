import { SearchLinkOptionKey } from "./type";

export const SEACH_LINK_PAYLOAD_MAP: Record<SearchLinkOptionKey, any> = {
    supplier_group: {
        doctype: "Supplier Group",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
        filters: JSON.stringify({
            is_group: ["=", 0],
        }),
    },
    price_list:{
        doctype: "Price List",
        ignore_user_permissions: 1,
        reference_doctype: "Supplier",
        filters: JSON.stringify({
            buying: 1,
        }),
    },
    currency:{
        doctype: "Currency",
        ignore_user_permissions: 1,
        reference_doctype: "Supplier",
    },
    bank_account: {
        doctype: "Bank Account",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
        filters: JSON.stringify({
            is_company_account: 1,
        }),
    },
    tax_category: {
        doctype: "Tax Category",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
    },
    tax_withholding_category: {
        doctype: "Tax Withholding Category",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
    },
    vendor_addresses: {
        doctype: "Address",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
        query: "erpnext.buying.doctype.supplier.supplier.get_supplier_primary",
        filters: JSON.stringify({
            supplier: "Test Supplier",
            type: "Address",
        }),
    },
    vendor_contact: {
        doctype: "Contact",
        ignore_user_permissions: 0,
        reference_doctype: "Supplier",
        query: "erpnext.buying.doctype.supplier.supplier.get_supplier_primary",
        filters: JSON.stringify({
            supplier: "Test Supplier",
            type: "Contact",
        }),
    },
    company: {
        doctype: "Company",
        ignore_user_permissions: 1,
        reference_doctype: "Party Account",
    },
    default_account: {
        doctype: "Account",
        ignore_user_permissions: 0,
        reference_doctype: "Party Account",
        filters: JSON.stringify({
            account_type: "Payable",
            root_type: "Liability",
            company: "Fortwall International Contracting Company",
            is_group: 0,
        }),
    }
}