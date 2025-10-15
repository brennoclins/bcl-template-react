import { Divider, Typography } from '@mui/material'

type SectionTitleBCLProps = {
  title: string
  align?: 'left' | 'center' | 'right'
  borderBackgroundColor?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | undefined
  padding?: number
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none' | undefined
}

export const ListSectionTitleBCL = ({ title, align = 'center', borderBackgroundColor = 'primary.400', variant = 'h4', padding = 1, textTransform = 'none'}: SectionTitleBCLProps) => {
  return (
    <>
      <Typography
        variant={variant}
        component="div"
        align={align}
        padding={padding}
        sx={{
          textTransform: textTransform,
          // fontWeight: 'bold',
          // pb: 1
        }}
      >
        {title}
      </Typography>

      <Divider
        sx={{
          backgroundColor: borderBackgroundColor,
          color: 'primary.contrastText',
          p: 0.2
        }}
      />
    </>
  )
}
