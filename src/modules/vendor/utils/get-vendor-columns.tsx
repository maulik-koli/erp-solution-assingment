'use client'
import { ColumnDef, type Column } from '@tanstack/react-table'
import { VendorListItem } from '../api/type'
import { formatDate } from '@lib/utils'
import Icon from '@components/icons'

const renderNullable = (value: unknown): string => {
    if (value === null || value === undefined || value === '') return '—'
    return String(value)
}

const renderBooleanPill = (
    value: unknown,
    truthyLabel: string,
    falsyLabel: string,
    truthyClassName = 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    falsyClassName = 'bg-muted text-muted-foreground',
) => {
    const isTruthy = Boolean(Number(value))

    return (
        <span
            className={`inline-flex min-w-20 items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium ${isTruthy ? truthyClassName : falsyClassName}`}
        >
            {isTruthy ? truthyLabel : falsyLabel}
        </span>
    )
}

const SortableHeader = ({
    column,
    title,
}: {
    column: Column<VendorListItem, unknown>
    title: string
}) => {
    return (
        <button
            type="button"
            className="flex w-full cursor-pointer select-none items-center justify-between gap-2 text-left"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
            <span>{title}</span>
            <Icon
                name="ArrowUpDown"
                className="h-3 w-3 shrink-0 text-muted-foreground/60"
            />
        </button>
    )
}


export const createVendorColumns = (): ColumnDef<VendorListItem>[] => [
    {
        id: 'sr_no',
        header: '#',
        enableSorting: false,
        meta: { className: 'w-16 min-w-[64px]' },
        cell: ({ row }) => (
            <span className="font-medium text-muted-foreground">{row.index + 1}</span>
        ),
    },
    {
        accessorKey: 'name',
        header: ({ column }) => <SortableHeader column={column} title="Vendor Code" />,
        meta: { className: 'min-w-[130px]' },
    },
    {
        accessorKey: 'supplier_name',
        header: ({ column }) => <SortableHeader column={column} title="Supplier Name" />,
        meta: { className: 'min-w-[220px]' },
    },
    {
        accessorKey: 'supplier_group',
        header: ({ column }) => <SortableHeader column={column} title="Supplier Group" />,
        meta: { className: 'min-w-[170px]' },
    },
    {
        accessorKey: 'supplier_type',
        header: ({ column }) => <SortableHeader column={column} title="Supplier Type" />,
        meta: { className: 'min-w-[150px]' },
    },
    {
        accessorKey: 'country',
        header: ({ column }) => <SortableHeader column={column} title="Country" />,
        meta: { className: 'min-w-[140px]' },
    },
    {
        accessorKey: 'default_currency',
        header: ({ column }) => <SortableHeader column={column} title="Currency" />,
        meta: { className: 'min-w-[120px]' },
    },
    {
        accessorKey: 'default_price_list',
        header: ({ column }) => <SortableHeader column={column} title="Price List" />,
        meta: { className: 'min-w-[160px]' },
    },
    {
        accessorKey: 'tax_category',
        header: ({ column }) => <SortableHeader column={column} title="Tax Category" />,
        meta: { className: 'min-w-[160px]' },
        cell: ({ row }) => renderNullable(row.getValue('tax_category')),
    },
    {
        accessorKey: 'supplier_primary_contact',
        header: ({ column }) => <SortableHeader column={column} title="Primary Contact" />,
        meta: { className: 'min-w-[180px]' },
    },
    {
        accessorKey: 'is_internal_supplier',
        header: 'Internal',
        enableSorting: false,
        meta: { className: 'min-w-[120px]' },
        cell: ({ row }) =>
            renderBooleanPill(
                row.getValue<0 | 1>('is_internal_supplier'),
                'Internal',
                'External',
            ),
    },
    {
        accessorKey: 'disabled',
        header: 'Status',
        enableSorting: false,
        meta: { className: 'min-w-[120px]' },
        cell: ({ row }) =>
            renderBooleanPill(
                row.getValue<0 | 1>('disabled'),
                'Disabled',
                'Active',
                'bg-rose-500/10 text-rose-700 dark:text-rose-400',
            ),
    },
    {
        accessorKey: 'modified',
        header: ({ column }) => <SortableHeader column={column} title="Modified" />,
        meta: { className: 'min-w-[150px]' },
        cell: ({ row }) => formatDate(row.getValue<string>('modified')),
    },
    {
        accessorKey: 'owner',
        header: 'Owner',
        enableSorting: false,
        meta: { className: 'min-w-[180px]' },
    },
]
