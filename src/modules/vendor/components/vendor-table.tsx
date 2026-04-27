'use client'
import React, { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    type SortingState,
} from '@tanstack/react-table'
import { VendorsListResponse } from '../api/type'
import { vendorColumns } from '../utils/get-vendor-columns'
import { cn } from '@lib/utils'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@ui/table'

interface VendorTableProps {
    vendors: VendorsListResponse
}


const VendorTable: React.FC<VendorTableProps> = ({ vendors }) => {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data: vendors,
        columns: vendorColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: { sorting },
    })

    
    return (
        <div className="overflow-hidden rounded-lg border border-border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="border-b border-border bg-muted/30 hover:bg-muted/30"
                        >
                            {headerGroup.headers.map((header) => {
                                const meta = header.column.columnDef.meta as
                                    | { className?: string }
                                    | undefined

                                return (
                                    <TableHead
                                        key={header.id}
                                        className={cn(
                                            'h-10 border-r border-border px-4 text-xs font-semibold text-foreground last:border-r-0',
                                            meta?.className,
                                        )}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                className="border-b border-border last:border-b-0 hover:bg-muted/20"
                            >
                                {row.getVisibleCells().map((cell) => {
                                    const meta = cell.column.columnDef.meta as
                                        | { className?: string }
                                        | undefined

                                    return (
                                        <TableCell
                                            key={cell.id}
                                            className={cn(
                                                'border-r border-border px-4 py-2.5 text-sm text-foreground last:border-r-0',
                                                meta?.className,
                                            )}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={vendorColumns.length}
                                className="h-24 text-center text-muted-foreground"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default VendorTable