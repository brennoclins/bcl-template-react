import { Button, Grid } from '@mui/material'
import clsx from 'clsx'
import { ActionButtonsBCLProps, ActionConfig } from './ActionButtonsBCL.types'

const getButtonConfig = (
  type: ActionButtonsBCLProps['actionType']
): ActionConfig => {
  const labels = {
    novo: 'Salvar',
    editar: 'Salvar',
    excluir: 'Excluir',
    pagar: 'Pagar',
    atualizar: 'Atualizar',
    cancelarPagamento: 'Cancelar Pagamento'
  }

  const colorConfig = {
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

  const colorType = {
    novo: 'novo',
    pagar: 'novo',
    editar: 'editar',
    atualizar: 'editar',
    excluir: 'excluir',
    cancelarPagamento: 'excluir'
  }[type]

  return {
    label: labels[type],
    ...colorConfig[colorType as 'novo' | 'editar' | 'excluir']
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
    pagar: disabledNew,
    editar: disabledEdit,
    atualizar: disabledEdit,
    excluir: disabledDelete,
    cancelarPagamento: disabledDelete
  }[actionType]

  const config = getButtonConfig(actionType)

  return (
    <Grid
      sx={{ borderColor: 'primary.200' }}
      className={clsx(
        'w-full flex gap-3 items-center justify-end p-4 rounded-lg'
      )}
    >
      <Button
        onClick={onCancel}
        sx={{ backgroundColor: (theme) => theme.palette.primary.light + '50' }}
        className={clsx(
          'md:w-1/4 px-2 font-semibold hover:scale-105 shadow-md'
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
