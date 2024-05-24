import { Grid, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const LinkBox = styled(Link)(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-start',
    "& img":{
        height: "100%",
        width: "145px",
    },
    [theme.breakpoints.down('md')]: {  
        justifyContent:'center',  
        "& img":{
            width: "120px",
        }
    }
}))

export const NavbarLogo = () => {
    return (
        <Grid md={2} xs={10}>
            <LinkBox to="/" >
                <img src={process.env.PUBLIC_URL + '/images/navlogo.png'} />
            </LinkBox>
        </Grid>
    )
}

