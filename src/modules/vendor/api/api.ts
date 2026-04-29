import api from "@lib/axios";
import qs from "qs";
import { ApiResponse } from "@/types/api-type";
import { MutateVendorResponse, CreateVendorPayload, OptionsItemsResponse, SearchLinkOptionKey, UpdateVendorPayload, VendorListParams, VendorsListAPIResponse, VendorsListResponse } from "./type";
import { SEACH_LINK_PAYLOAD_MAP } from "./utils";


export const getVendorList = async ({ search, sort, limit, start }: VendorListParams): Promise<VendorsListResponse> => {
    const filters: any[] = [];

    if (search) {
        // serch by supplier name
        filters.push(
            ["Supplier", "supplier_name", "like", `%${search}%`]
        );
    }

    // selected field can be change
    const fields = [
        "name",
        "owner",
        "creation",
        "modified",
        "modified_by",
        "docstatus",
        "idx",
        "disabled",
        "naming_series",
        "supplier_name",
        "supplier_group",
        "country",
        "supplier_type",
        "is_transporter",
        "default_currency",
        "default_price_list",
        "default_bank_account",
        "is_internal_supplier",
        "represents_company",
        "supplier_details",
        "website",
        "language",
        "tax_id",
        "tax_category",
        "tax_withholding_category",
        "supplier_primary_address",
        "supplier_primary_contact",
        "allow_purchase_invoice_creation_without_purchase_order",
        "allow_purchase_invoice_creation_without_purchase_receipt",
        "is_frozen",
        "warn_rfqs",
        "warn_pos",
        "prevent_rfqs",
        "prevent_pos",
        "on_hold",
        "hold_type",
        "default_bank_account",
    ];

    const payload = qs.stringify({
        doctype: "Supplier",
        fields: JSON.stringify(fields),
        filters: JSON.stringify(filters),
        order_by: sort || "modified desc",
        
        // right now not implmenting pagginaton but can be in future by just reciving these values
        start: start || 0,
        page_length: limit || 20,
    });

    const res = await api.post<ApiResponse<VendorsListAPIResponse>>(
        "/api/method/frappe.desk.reportview.get",
        payload
    );

    const { keys, values } = res.data.message;

    return values.map((row: any[]) =>
        Object.fromEntries(
            keys.map((key: string, i: number) => [key, row[i]])
        )
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

export const getOptionsData = async (key: SearchLinkOptionKey): Promise<OptionsItemsResponse> => {
    const payload = qs.stringify({
        txt: "",
        page_length: 10,
        ...SEACH_LINK_PAYLOAD_MAP[key]
    });

    const res = await api.post<ApiResponse<OptionsItemsResponse>>("/api/method/frappe.desk.search.search_link", payload);
    return res.data.message
}



// ---------- Mutation APIs ----------

export const mutateVendor = async (payload: CreateVendorPayload | UpdateVendorPayload): Promise<MutateVendorResponse> => {
    const apiPayload = qs.stringify({
        doc: JSON.stringify(payload.doc),
        action: payload.action,
    })

    const res = await api.post<MutateVendorResponse>(
        "/api/method/frappe.desk.form.save.savedocs",
        apiPayload
    )
    return res.data
}