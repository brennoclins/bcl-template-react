import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Box, IconButton } from '@mui/material'
import { MouseEvent } from 'react'

type TablePaginationActionsProps = {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void
}

export function TablePaginationActionsBCL({
  count,
  page,
  rowsPerPage,
  onPageChange
}: TablePaginationActionsProps) {
  const isFirst = page === 0
  const isLast = page >= Math.ceil(count / rowsPerPage) - 1

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className="flex gap-1">
      <IconButton
        onClick={(e) => onPageChange(e, 0)}
        disabled={isFirst}
        sx={{
          transition: 'transform 0.15s ease-in-out, color 0.2s',
          color: 'text.secondary',
          '&:hover': {
            bgcolor: 'primary.100',
            boxShadow: 1
          }
        }}
      >
        <ChevronDoubleLeftIcon className="w-5 h-5" />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page - 1)}
        disabled={isFirst}
        sx={{
          transition: 'transform 0.15s ease-in-out, color 0.2s',
          color: 'text.secondary',
          '&:hover': {
            bgcolor: 'primary.100',
            boxShadow: 1
          }
        }}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={isLast}
        sx={{
          transition: 'transform 0.15s ease-in-out, color 0.2s',
          color: 'text.secondary',
          '&:hover': {
            bgcolor: 'primary.100',
            boxShadow: 1
          }
        }}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))}
        disabled={isLast}
        sx={{
          transition: 'transform 0.15s ease-in-out, color 0.2s',
          color: 'text.secondary',
          '&:hover': {
            bgcolor: 'primary.100',
            boxShadow: 1
          }
        }}
      >
        <ChevronDoubleRightIcon className="w-5 h-5" />
      </IconButton>
    </Box>
  )
}
