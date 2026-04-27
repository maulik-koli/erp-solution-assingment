import api from "@lib/axios";
import qs from "qs";
import { ApiResponse } from "@/types/api-type";
import { OptionsItemsResponse, SearchLinkOptionKey, VendorListParams, VendorsListAPIResponse, VendorsListResponse } from "./type";


export const getVendorList = async ({ search, status }: VendorListParams): Promise<VendorsListResponse> => {
    const filters: any[] = [];

    if (search) {
        filters.push(["Supplier", "supplier_name", "like", `%${search}%`]);
    }

    if (status === "active") {
        filters.push(["Supplier", "disabled", "=", 0]);
    } else if (status === "disabled") {
        filters.push(["Supplier", "disabled", "=", 1]);
    }

    const payload = qs.stringify(
        {
            doctype: "Supplier",
            fields: JSON.stringify([
                "`tabSupplier`.`name`",
                "`tabSupplier`.`owner`",
                "`tabSupplier`.`creation`",
                "`tabSupplier`.`modified`",
                "`tabSupplier`.`modified_by`",
                "`tabSupplier`.`_user_tags`",
                "`tabSupplier`.`_comments`",
                "`tabSupplier`.`_assign`",
                "`tabSupplier`.`_liked_by`",
                "`tabSupplier`.`docstatus`",
                "`tabSupplier`.`idx`",
                "`tabSupplier`.`supplier_group`",
                "`tabSupplier`.`supplier_name`",
                "`tabSupplier`.`image`",
                "`tabSupplier`.`on_hold`",
                "`tabSupplier`.`disabled`",
            ]),
            filters: JSON.stringify(filters),
            order_by: "`tabSupplier`.`modified` asc",
            start: 0,
            page_length: 20,
            view: "List",
            group_by: "",
            with_comment_count: 1,
        }
    );

    const res = await api.post<ApiResponse<VendorsListAPIResponse>>("/api/method/frappe.desk.reportview.get", payload);

    const { keys, values } = res.data.message;
    return values.map((row: any[]) =>
        Object.fromEntries(keys.map((key: string, i: number) => [key, row[i]]))
    ) as VendorsListResponse;
}


export const getVendorCount = async (): Promise<number> => {
    const payload = qs.stringify({
        doctype: "Supplier",
        filters: [],
        fields: [],
        distinct: false,
        limit: 1001,
    });

    const res = await api.post<ApiResponse<number>>("/api/method/frappe.desk.reportview.get_count", payload);
    return res.data.message
}



// ---------- Options APIs ----------

const SEACH_LINK_PAYLOAD_MAP: Record<SearchLinkOptionKey, any> = {
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

export const getOptionsData = async (key: SearchLinkOptionKey): Promise<OptionsItemsResponse> => {
    const payload = qs.stringify({
        txt: "",
        page_length: 10,
        ...SEACH_LINK_PAYLOAD_MAP[key]
    });

    const res = await api.post<ApiResponse<OptionsItemsResponse>>("/api/method/frappe.desk.search.search_link", payload);
    return res.data.message
}