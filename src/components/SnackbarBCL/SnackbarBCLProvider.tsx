import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Snackbar, Alert, SnackbarOrigin, useTheme, alpha } from '@mui/material'

type SnackbarState = {
  open: boolean
  message: string
  color: 'success' | 'error' | 'warning' | 'info'
}

const SnackbarContext = createContext<(message: string, color?: SnackbarState['color']) => void>(() => {})

export const useSnackbarBCL = () => useContext(SnackbarContext)

type Props = {
  children: ReactNode
  position?: SnackbarOrigin // 👈 permite customizar onde aparece
}

export const SnackbarBCLProvider = ({
  children,
  position = { vertical: 'top', horizontal: 'right' }
}: Props) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    color: 'success'
  })

  const showSnackbar = (message: string, color: SnackbarState['color'] = 'info') => {
    setSnackbar({ open: true, message, color })
  }

  const theme = useTheme()

const getBackgroundColor = (color: SnackbarState['color']) => {
  const palette = theme.palette[color] || theme.palette.info
  return alpha(palette.main, 0.9) // suaviza o fundo com 90% de opacidade
}


  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        autoHideDuration={4000}
        anchorOrigin={position}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.color}
          sx={{ 
            width: '100%', 
            backgroundColor: getBackgroundColor(snackbar.color) 
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
