import { Grid, Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"
import { useAppSelector } from "setup/store/react-hooks"

const ContentLink = styled(Link)(({ theme }) => ({
  display:'flex',
  fontSize:'0.875rem',//14
  lineHeight:'180%',
  fontWeight:'600',
  color : theme.palette.dark.main,
  marginBottom: '14px',
}))
const TitleContent = styled(Typography)(({theme})=>({
  color: theme.palette.dark.main,
  marginBottom: '20px',
  position : 'relative',
  display : 'inline-table',
  '&:before':{
      content: `""`,
      position:'absolute',
      bottom:'0',
      width:'100%',
      height:'1px',
      background: theme.palette.dark.main,
      zIndex:'0',
  },
}))
export const FooterContentLinks = () => {
    const data = useAppSelector(state => state.home.FooterLinks)
    return (
        <Grid container md={8} xs={12} justifyContent='space-between'>
          {data.map((item)=>{
            return <Grid item md={4}>
              <TitleContent variant='body1'>{item.title}</TitleContent>
              {item.links.map((item)=>{
                return <ContentLink to={item.path}>{item.name}</ContentLink>
              })}
            </Grid>
          })}
        </Grid>
    )
}
