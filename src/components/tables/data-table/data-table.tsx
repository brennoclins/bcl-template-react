import {
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { Button, TableCell } from '@mui/material'
import { TableBaseBCL, TableBaseBCLProps } from '../table-base/table-base'


type IconConfig = {
  trueIcon?: React.ReactNode
  falseIcon?: React.ReactNode
}

type ColorConfig = {
  trueColor?: string
  falseColor?: string
}

export type DataTableBCLProps<T = any> = Omit<TableBaseBCLProps<T>, 'renderRow'> & {
  tableRow: string[]
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  booleanIcons?: IconConfig
  booleanColors?: ColorConfig
}

export function DataTableBCL<T = any>({
  headers,
  rows,
  tableRow,
  onEdit,
  onDelete,
  booleanIcons,
  booleanColors
}: DataTableBCLProps<T>) {
  const getNestedValue = (obj: any, key: string) =>
    key.split('.').reduce((value, part) => value && value[part], obj)

  return (
    <TableBaseBCL
      headers={headers}
      rows={rows}
      renderRow={(row, rowIndex) => {
        const rowCells = tableRow.map((field, i) => {
          const rawValue = getNestedValue(row, field)
          let displayValue = rawValue

          if (rawValue instanceof Date) {
            displayValue = rawValue.toLocaleDateString()
          }

          if (typeof rawValue === 'boolean') {
            const TrueIcon =
              booleanIcons?.trueIcon ?? (
                <CheckCircleIcon
                  className="w-5 h-5"
                  color={booleanColors?.trueColor ?? '#4CAF50'}
                />
              )
            const FalseIcon =
              booleanIcons?.falseIcon ?? (
                <XCircleIcon
                  className="w-5 h-5"
                  color={booleanColors?.falseColor ?? '#F44336'}
                />
              )

            displayValue = <span>{rawValue ? FalseIcon : TrueIcon}</span>
          }

          return (
            <TableCell
              key={i}
              onClick={onEdit ? () => onEdit(row) : undefined}
              className="py-1_ text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]"
            >
              {displayValue}
            </TableCell>
          )
        })

        const actionsCell =
          (onEdit || onDelete) && (
            <TableCell className="px-2 whitespace-nowrap max-w-[50px]">
              {onDelete && (
                <Button
                  color="error"
                  className="flex gap-2 hover:scale-105 text-xs shadow-md transition-all ease-linear"
                  onClick={() => onDelete(row)}
                >
                  <TrashIcon className="w-5 h-5 text-red-500" />
                  Excluir
                </Button>
              )}
            </TableCell>
          )

        return [...rowCells, actionsCell]
      }}
    />
  )
}
