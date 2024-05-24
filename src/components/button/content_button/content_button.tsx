import { Button, SxProps } from "@mui/material"
import { palette } from "../../../setup/theme/palette"

interface Props {
  Text?: string | undefined
  onClickEvent?: () => unknown
  sxStyle?: SxProps
  icon?: JSX.Element
  isfinished?: boolean
  loading?: boolean | undefined
  disabled?: boolean
  isLoading?: boolean
}

export const ContentButton = ({ onClickEvent, sxStyle, icon, Text }: Props) => {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      onClick={onClickEvent}
      sx={{
        ...sxStyle,
        "&:hover": {
          boxShadow: `0px 0px 33px 10px ${palette.primary.light}`,
          color: palette.neutral.main,
        }
      }}
      startIcon={icon}
      color="primary">
      {Text}
    </Button>
  )
}
