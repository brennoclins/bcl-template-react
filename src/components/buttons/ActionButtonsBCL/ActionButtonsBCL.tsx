import { Button, Grid } from '@mui/material'
import clsx from 'clsx'
import { ActionButtonsBCLProps } from './ActionButtonsBCL.types'

export function ActionButtonsBCL({ actions, layout = 'row' }: ActionButtonsBCLProps) {
  const direction = layout === 'column' ? 'flex-col' : 'flex-row'

  return (
    <Grid
      className={clsx('w-full flex gap-3 justify-end items-center p-4 rounded-lg', direction)}
      sx={{ borderColor: 'primary.200' }}
    >
      {actions
        .filter((action) => !action.hidden)
        .map((action) => (
          <Button
            key={action.key}
            onClick={action.onClick}
            disabled={action.disabled}
            variant="contained"
            color={action.color || 'primary'}
            startIcon={action.icon}
            className={clsx(
              'md:w-1/4 px-2 font-semibold hover:scale-105 shadow-md transition-all',
              action.className
            )}
            {...action.muiProps}
          >
            {action.label}
          </Button>
        ))}
    </Grid>
  )
}
