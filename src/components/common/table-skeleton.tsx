import React from 'react'
import { cn } from '@lib/utils'
import { Skeleton } from '@ui/skeleton'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@ui/table'

interface TableSkeletonProps {
    columns: number
    rows?: number
}


const TableSkeleton: React.FC<TableSkeletonProps> = ({ columns, rows = 8 }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-border">
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-border bg-muted/30 hover:bg-muted/30">
                        {Array.from({ length: columns }).map((_, i) => (
                            <TableHead
                                key={i}
                                className={cn(
                                    'h-10 border-r border-border px-4 last:border-r-0',
                                )}
                            >
                                <Skeleton className="h-3 w-20" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className="border-b border-border last:border-b-0 hover:bg-transparent"
                        >
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    className="border-r border-border px-4 py-2.5 last:border-r-0"
                                >
                                    <Skeleton
                                        className="h-3"
                                        style={{ width: `${50 + ((rowIndex + colIndex) % 4) * 14}%` }}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableSkeleton