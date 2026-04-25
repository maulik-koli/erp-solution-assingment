import api from "@lib/axios";
import qs from "qs";
import { ApiResponse } from "@/types/api-type";
import { VendorListParams, VendorsListAPIResponse, VendorsListResponse } from "./type";


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