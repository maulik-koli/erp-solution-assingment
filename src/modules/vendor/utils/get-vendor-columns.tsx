'use client'
import Image from 'next/image'
import { ColumnDef } from '@tanstack/react-table'
import { VendorListItem } from '../api/type'
import { formatDate } from '@lib/utils'
import Icon from '@components/icons'

const renderNullable = (value: unknown): string => {
    if (value === null || value === undefined || value === '') return ''
    return String(value)
}

const SortableHeader = ({ column, title }: { column: any; title: string }) => {
    return (
        <div
            className="flex cursor-pointer select-none items-center justify-between gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
            <span>{title}</span>
            <Icon
                name="ArrowUpDown"
                className="h-3 w-3 shrink-0 text-muted-foreground/60"
            />
        </div>
    )
}


export const vendorColumns: ColumnDef<VendorListItem>[] = [
    {
        accessorKey: 'idx',
        header: '#',
        enableSorting: false,
        meta: { className: 'min-w-[50px]' },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => <SortableHeader column={column} title="Vendor Code" />,
        meta: { className: 'min-w-[120px]' },
    },
    {
        accessorKey: 'supplier_name',
        header: ({ column }) => <SortableHeader column={column} title="Vendor Name" />,
        meta: { className: 'min-w-[200px]' },
    },
    {
        accessorKey: 'supplier_group',
        header: ({ column }) => <SortableHeader column={column} title="Supplier Group" />,
        meta: { className: 'min-w-[160px]' },
    },
    {
        accessorKey: 'image',
        header: 'Image',
        enableSorting: false,
        meta: { className: 'min-w-[80px]' },
        cell: ({ row }) => {
            const value = row.getValue<string | null>('image')
            if (!value) return ''
            return (
                <Image
                    src={value}
                    alt="vendor"
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded object-cover"
                />
            )
        },
    },
    {
        accessorKey: 'disabled',
        header: ({ column }) => <SortableHeader column={column} title="Disabled" />,
        meta: { className: 'min-w-[90px]' },
        cell: ({ row }) => (row.getValue<0 | 1>('disabled') ? 'Yes' : 'No'),
    },
    {
        accessorKey: 'on_hold',
        header: ({ column }) => <SortableHeader column={column} title="On Hold" />,
        meta: { className: 'min-w-[90px]' },
        cell: ({ row }) => (row.getValue<0 | 1>('on_hold') ? 'Yes' : 'No'),
    },
    {
        accessorKey: 'docstatus',
        header: ({ column }) => <SortableHeader column={column} title="Doc Status" />,
        meta: { className: 'min-w-[100px]' },
        cell: ({ row }) => {
            const map: Record<number, string> = { 0: 'Draft', 1: 'Submitted', 2: 'Cancelled' }
            return map[row.getValue<number>('docstatus')] ?? ''
        },
    },
    {
        accessorKey: 'owner',
        header: ({ column }) => <SortableHeader column={column} title="Owner" />,
        meta: { className: 'min-w-[150px]' },
    },
    {
        accessorKey: 'modified_by',
        header: ({ column }) => <SortableHeader column={column} title="Modified By" />,
        meta: { className: 'min-w-[150px]' },
    },
    {
        accessorKey: 'creation',
        header: ({ column }) => <SortableHeader column={column} title="Created" />,
        meta: { className: 'min-w-[130px]' },
        cell: ({ row }) => formatDate(row.getValue<string>('creation')),
    },
    {
        accessorKey: 'modified',
        header: ({ column }) => <SortableHeader column={column} title="Modified" />,
        meta: { className: 'min-w-[130px]' },
        cell: ({ row }) => formatDate(row.getValue<string>('modified')),
    },
    {
        accessorKey: '_user_tags',
        header: 'Tags',
        enableSorting: false,
        meta: { className: 'min-w-[100px]' },
        cell: ({ row }) => renderNullable(row.getValue('_user_tags')),
    },
    {
        accessorKey: '_comments',
        header: 'Comments',
        enableSorting: false,
        meta: { className: 'min-w-[100px]' },
        cell: ({ row }) => renderNullable(row.getValue('_comments')),
    },
    {
        accessorKey: '_assign',
        header: 'Assigned To',
        enableSorting: false,
        meta: { className: 'min-w-[120px]' },
        cell: ({ row }) => renderNullable(row.getValue('_assign')),
    },
    {
        accessorKey: '_liked_by',
        header: 'Liked By',
        enableSorting: false,
        meta: { className: 'min-w-[100px]' },
        cell: ({ row }) => renderNullable(row.getValue('_liked_by')),
    },
]
