import { VendorStatus } from "@/types/enums";
import { VendorFormType } from "../utils/schemas";

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



// ---------- Mutation APIs ----------

export type CreateVendorPayload = {
    doc: VendorFormType & {
        doctype: "Supplier",
        __unsaved: 1
    },
    action: "Save"
}


export type UpdateVendorPayload = VendorFormType & {
    doctype: "Supplier",
    name: string,
    modified: string,
}


// ---------- Mutation Response ---------

export interface CreateSupplierResponse {
    docs: SupplierDoc[];
    docinfo: SupplierDocInfo;
    _server_messages: string;
}



interface SupplierOnload {
  addr_list: unknown[];
  contact_list: unknown[];
  dashboard_info: unknown[];
}

interface SupplierDoc {
    name: string;
    owner: string;
    creation: string;
    modified: string;
    modified_by: string;
    docstatus: number;
    idx: number;
    doctype: "Supplier";
    naming_series: string;
    supplier_name: string;
    supplier_group: string;
    supplier_type: string;
    country: string;
    default_currency: string;
    default_price_list: string;
    default_bank_account: string | null;
    is_transporter: 0 | 1;
    is_internal_supplier: 0 | 1;
    represents_company: string;
    supplier_details: string | null;
    website: string | null;
    language: string;
    tax_id: string | null;
    tax_category: string | null;
    tax_withholding_category: string | null;
    supplier_primary_address: string | null;
    primary_address: string | null;
    supplier_primary_contact: string | null;
    mobile_no: string | null;
    email_id: string | null;
    payment_terms: string | null;
    allow_purchase_invoice_creation_without_purchase_order: 0 | 1;
    allow_purchase_invoice_creation_without_purchase_receipt: 0 | 1;
    is_frozen: 0 | 1;
    disabled: 0 | 1;
    warn_rfqs: 0 | 1;
    warn_pos: 0 | 1;
    prevent_rfqs: 0 | 1;
    prevent_pos: 0 | 1;
    on_hold: 0 | 1;
    hold_type: string;
    release_date: string | null;
    accounts: string[];
    companies: string[];
    portal_users: unknown[];
    __onload: SupplierOnload;
}

interface UserInfo {
  fullname: string;
  image: string | null;
  name: string;
  email: string;
  time_zone: string;
}

interface SupplierPermissions {
    select: number;
    read: number;
    write: number;
    create: number;
    delete: number;
    submit: number;
    cancel: number;
    amend: number;
    print: number;
    email: number;
    report: number;
    import: number;
    export: number;
    share: number;
}

interface SupplierDocInfo {
    user_info: Record<string, UserInfo>;
    comments: unknown[];
    shared: unknown[];
    assignment_logs: unknown[];
    attachment_logs: unknown[];
    info_logs: unknown[];
    like_logs: unknown[];
    workflow_logs: unknown[];
    doctype: "Supplier";
    name: string;
    attachments: unknown[];
    communications: unknown[];
    automated_messages: unknown[];
    versions: unknown[];
    assignments: unknown[];
    permissions: SupplierPermissions;
    views: unknown[];
    energy_point_logs: unknown[];
    additional_timeline_content: unknown[];
    milestones: unknown[];
    is_document_followed: boolean | null;
    tags: string;
    document_email: string | null;
}