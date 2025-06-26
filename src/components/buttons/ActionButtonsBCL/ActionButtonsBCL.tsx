import { Button, Grid } from '@mui/material'
import clsx from 'clsx'
import { ActionButtonsBCLProps, ActionConfig } from './ActionButtonsBCL.types'

const getButtonConfig = (type: 'novo' | 'editar' | 'excluir'): ActionConfig => {
  const label = type === 'excluir' ? 'Excluir' : 'Salvar'

  const config = {
    novo: {
      bg: (theme: any) => theme.palette.success.dark,
      hover: (theme: any) => theme.palette.success.main
    },
    editar: {
      bg: (theme: any) => theme.palette.info.dark,
      hover: (theme: any) => theme.palette.info.main
    },
    excluir: {
      bg: (theme: any) => theme.palette.error.dark,
      hover: (theme: any) => theme.palette.error.main
    }
  }

  return {
    label,
    ...config[type]
  }
}

export function ActionButtonsBCL({
  onCancel,
  onSave,
  actionType,
  disabledNew,
  disabledEdit,
  disabledDelete
}: ActionButtonsBCLProps) {
  const isDisabled = {
    novo: disabledNew,
    editar: disabledEdit,
    excluir: disabledDelete
  }[actionType]

  const config = getButtonConfig(actionType)

  return (
    <Grid
      sx={{ borderColor: 'primary.200' }}
      className={clsx(
        'w-full flex gap-3 items-center justify-end mt-2 p-4 rounded-lg border shadow'
      )}
    >
      <Button
        onClick={onCancel}
        sx={{ backgroundColor: (theme) => theme.palette.primary.light + '50' }}
        className={clsx(
          'md:w-1/4 px-2 font-semibold hover:scale-105 shadow-md text-primary-darker'
        )}
      >
        Cancelar
      </Button>

      <Button
        onClick={onSave}
        disabled={isDisabled}
        sx={{
          backgroundColor: config.bg,
          color: 'primary.contrastText',
          '&:hover': {
            backgroundColor: config.hover,
            color: 'primary.contrastText'
          }
        }}
        className={clsx(
          'md:w-1/4 px-2 gap-2 font-semibold shadow-md transition-all ease-linear',
          'hover:scale-105'
        )}
      >
        {config.label}
      </Button>
    </Grid>
  )
}
