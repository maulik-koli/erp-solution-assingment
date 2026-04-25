
export type VendorStatus = "active" | "disabled" | "all"

export type VendorListParams = {
    search: string,
    status: VendorStatus
}

export type VendorsListAPIResponse = {
    keys: string[],
    values: Array<Array<string | number | null>>,
    user_info: Record<any, any>,
}

export type VendorListItem = {
    name: string;
    owner: string;
    creation: string;
    modified: string;
    modified_by: string;
    _user_tags: string | null;
    _comments: string | null;
    _assign: string | null;
    _liked_by: string | null;
    docstatus: number;
    idx: number;
    supplier_group: string;
    supplier_name: string;
    image: string | null;
    on_hold: 0 | 1;
    disabled: 0 | 1;
};

export type VendorsListResponse = VendorListItem[]