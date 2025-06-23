import { Divider, Typography } from '@mui/material'

type SectionTitleBCLProps = {
  title: string
  align?: 'left' | 'center' | 'right'
}

export const SectionTitleBCL = ({ title, align = 'center' }: SectionTitleBCLProps) => {
  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        align={align}
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          pb: 1
        }}
      >
        {title}
      </Typography>

      <Divider
        sx={{
          backgroundColor: 'primary.400',
          height: 3,
          mx: align === 'center' ? 'auto' : 0,
          width: align === 'center' ? '60%' : '100%'
        }}
      />
    </>
  )
}
