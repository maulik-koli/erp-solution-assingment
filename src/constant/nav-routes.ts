import { IconType } from "@/components/icons";


export interface NavItem {
    label: string;
    isSelected?: boolean;
    icon: IconType;
}

export interface SidebarSection {
    heading: string;
    defaultRoute: string;
    items: NavItem[];
}


export const RAIL_ITEMS: NavItem[] = [
    { icon: "folder", label: "Dashboard" },
    { icon: "money", label: "Wallet" },
    { icon: "package", label: "Inventory" },
    { icon: "cart", label: "Purchase", isSelected: true },
    { icon: "graph", label: "Finance" },
];


export const SIDEBAR_ROUTES: Record<string, SidebarSection> = {
    "/": {
        heading: "Purchase",
        defaultRoute: "/",
        items: [
            { label: "Purchase Dashboard", icon: "LayoutDashboard" },
            { label: "Vendor", icon: "Users", isSelected: true },
            { label: "Request for Quotation", icon: "FileQuestion" },
            { label: "Purchase Order", icon: "ClipboardList" },
            { label: "Purchase Return", icon: "RotateCcw" },
            { label: "Free Text Purchase", icon: "FileText" },
            { label: "Vendor Payment", icon: "CreditCard" },
            { label: "Purchase Reports", icon: "BarChart3" },
        ],
    },
};

export const DEFAULT_ROUTE = "/";