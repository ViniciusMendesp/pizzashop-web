import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkaleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="w-[172]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[148]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[110]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[200]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[64]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[92]px h-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="w-[92]px h-4" />
        </TableCell>
      </TableRow>
    )
  })
}
