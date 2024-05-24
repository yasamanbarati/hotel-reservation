import { Typography, styled } from "@mui/material"

const CoverMainSection = styled('div')(({theme})=>({
  background : theme.palette.primary.main,
  borderRadius: '22px',
  minHeight: '480px',
  display: 'flex',
  justifyContent:'flex-end',
  alignItems:'center',
  position:'relative',
  "& img":{
    position:'absolute',
    width :'510px',
    height: '529px',
    bottom:'-4px',
    left:'0',
    objectFit: 'none',
    borderRadius: '22px',
  },
  "& div":{
    marginLeft: '50px',
  },

  [theme.breakpoints.down('laptop')]: {
    "& img":{
      width :'400px',
    },
    "& h1":{
      fontSize:'2rem',
    },
    "& h2":{
      fontSize:'1.5rem',
    }
  },
  [theme.breakpoints.down('md')]: {
    paddingTop : '50px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',   
    "& img":{
      width :'300px',
      height: '320px',
      objectFit: 'cover',
      bottom:'-16px',
      left:'-18px',
    },
    "& div":{
      marginLeft: '0',
    },
    "& h1":{
      fontSize:'1.86rem',
      textAlign:'center',
    },
    "& h2":{
      fontSize:'1.125rem',
      textAlign:'center',
    }
  }
}))
export const CoverSection = () => {
  return (
    <CoverMainSection>
      <img src={process.env.PUBLIC_URL + '/images/hero-img.png'} alt="cover photo" />
      <div>
        <Typography
        component='h1'
        variant="h2"
        color='white'>
          Parsian Azadi Hotel
        </Typography> 

        <Typography
        component='h2'
        variant="h3"
        color='white'
        fontWeight='500'>
          The first choice of dignitaries
        </Typography> 
      </div>
      <div></div>
    </CoverMainSection>
  )
}