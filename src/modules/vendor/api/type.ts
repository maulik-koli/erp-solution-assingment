import { VendorStatus } from "@/types/enums";

export type VendorTabs = 'details' | 'tax' | 'address' | 'account'



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


// ---------- Options APIs ----------
export type SearchLinkOptionKey = 
    'supplier_group'
    | 'price_list'
    | 'currency'
    | 'bank_account'
    | 'tax_category'
    | 'tax_withholding_category'
    | 'vendor_addresses'
    | 'vendor_contact'
    | 'company'
    | 'default_account';


export type OptionsItemsResponse = {
    value: string,
    description: string,
    label?: string
}[]