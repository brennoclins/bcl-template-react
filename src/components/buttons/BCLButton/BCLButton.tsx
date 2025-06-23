import { Button, ButtonProps } from '@mui/material'
import clsx from 'clsx'

interface BCLButtonProps extends ButtonProps {
  tailwindClass?: string
}

export function BCLButton({ tailwindClass, ...rest }: BCLButtonProps) {
  return (
    <Button
      {...rest}
      className={clsx(tailwindClass, rest.className)}
    />
  )
}
