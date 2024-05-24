import { Grid, ImageList, ImageListItem, Typography, styled } from "@mui/material"
import { specialSaleData } from "services/server/mock";

const DescriptionBox = styled('div')(({theme})=>({
  backgroundColor: theme.palette.primary.light,
  borderRadius: '16px',
  boxShadow :`0 4px 15px -5px ${theme.palette.primary.light}`,
  padding: '16px',
  display:'grid',
  gap: '8px',
  width: '280px',
}))

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const Introduction = () => {
    return (
        <Grid
          my={8}
          container
          height="100%"
          minHeight="inherit"
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column-reverse", md: "row-reverse" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              height={{ md: '100%', xs: '50%' }}
              display="flex"
              alignItems="center"
              justifyContent='flex-end'
            >
              <ImageList
                sx={{
                    height: 576,
                    transform: 'translateZ(0)',
                    overflow:'hidden',
                  }}
                rowHeight={276}
                cols={4}
                gap={8}>
                {specialSaleData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      loading="lazy"
                    />
                  </ImageListItem>
                    ))}
              </ImageList>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              height={{ md: '100%', xs: '50%' }}
            >
              <Typography component='h2' variant="h3">Parsian Azadi Hotel, a leader in providing modern hotel services</Typography>
              <Typography my={2} component='p' variant="body1">Parsian Azadi or Hyatt Hotel has been operating since 1370 under the supervision of Parsian Hotels Group. This hotel, which is one of the largest and tallest five-star international hotels in Iran, was completely renovated in 2011 at a cost of 80 billion Tomans.</Typography>

              <DescriptionBox>
                <Typography component='h6' variant="h6" color='primary'>
                  475 residence units
                </Typography>
                <Typography component='p' variant="body1">
                    With a variety of views, layouts and facilities
                </Typography>
              </DescriptionBox>

            </Grid>
        </Grid>
      )
}