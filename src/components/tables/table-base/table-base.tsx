import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ReactNode } from 'react'

export interface TableBaseBCLProps<T = any> {
  headers: string[]
  rows: T[]
  renderRow: (row: T, rowIndex: number) => ReactNode
}

export function TableBaseBCL<T = any>({ headers, rows, renderRow }: TableBaseBCLProps<T>) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} style={{ fontWeight: 'bold' }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.primary.light + '50'
                }
              }}
            >
              {renderRow(row, rowIndex)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
