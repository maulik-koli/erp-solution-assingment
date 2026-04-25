import { IconType } from "@/components/icons";


export interface NavItem {
    label: string;
    href: string;
    icon: IconType;
}

export interface SidebarSection {
    heading: string;
    defaultRoute: string;
    items: NavItem[];
}


export const RAIL_ITEMS: NavItem[] = [
    { icon: "folder", label: "Dashboard", href: "/" },
    { icon: "money", label: "Wallet", href: "/wallet" },
    { icon: "package", label: "Inventory", href: "/inventory" },
    { icon: "cart", label: "Purchase", href: "/purchase" },
    { icon: "graph", label: "Finance", href: "/finance" },
];


export const SIDEBAR_ROUTES: Record<string, SidebarSection> = {
    "/purchase": {
        heading: "Purchase",
        defaultRoute: "/purchase/vendor",
        items: [
            { label: "Purchase Dashboard", href: "/purchase/dashboard", icon: "LayoutDashboard" },
            { label: "Vendor", href: "/purchase/vendor", icon: "Users" },
            { label: "Request for Quotation", href: "/purchase/request-for-quotation", icon: "FileQuestion" },
            { label: "Purchase Order", href: "/purchase/purchase-order", icon: "ClipboardList" },
            { label: "Purchase Return", href: "/purchase/purchase-return", icon: "RotateCcw" },
            { label: "Free Text Purchase", href: "/purchase/free-text-purchase", icon: "FileText" },
            { label: "Vendor Payment", href: "/purchase/vendor-payment", icon: "CreditCard" },
            { label: "Purchase Reports", href: "/purchase/purchase-reports", icon: "BarChart3" },
        ],
    },
};

export const DEFAULT_ROUTE =
    Object.values(SIDEBAR_ROUTES).find((s) => s.items.length > 0)?.defaultRoute ?? "/";

export function getRailHref(railHref: string): string {
    return SIDEBAR_ROUTES[railHref]?.defaultRoute ?? railHref;
}

export function getSidebarForPath(pathname: string): SidebarSection | null {
    const match = RAIL_ITEMS.find((r) => r.href === '/' ? pathname === '/' : pathname.startsWith(r.href));
    if (!match) return null;
    return SIDEBAR_ROUTES[match.href] ?? null;
}


export function getRailItemForPath(pathname: string): NavItem | undefined {
    return RAIL_ITEMS.find((r) => pathname.startsWith(r.href));
}

export const ALL_APP_PATHS: string[] = [
    ...RAIL_ITEMS.map((r) => r.href),
    ...Object.values(SIDEBAR_ROUTES).flatMap((s) => s.items.map((i) => i.href)),
];