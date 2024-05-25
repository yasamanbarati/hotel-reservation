import { Chip, Grid, Typography, styled } from "@mui/material";
import { ContentButton } from "components/button/content_button/content_button";
import { Link } from "react-router-dom";

import { HotelRoomsInformationType } from "scenes/_slice/type";

const CardSection = styled(Grid)(({ theme }) => ({
  height: "364px",
  border: `1px solid ${theme.palette.neutral.dark}`,
  borderRadius: "24px",
  boxShadow: `0 4px 4px 0 ${theme.palette.neutral.dark}`,
}));
const CardContent = styled(Grid)(({ theme }) => ({
  "& h2": {
    padding: "24px 0",
    borderBottom: `1px solid ${theme.palette.neutral.dark}`,
  },
  "& .MuiChip-root": {
    marginRight: "16px",
    marginBottom: "16px",
    padding: "20px 16px",
    "& .MuiChip-label": {
      fontSize: "0.875rem",
      lineHeight: "180%",
      fontWeight: "600",
      textAlign: "center",
    },
  },
}));

export const RoomCard = ({
  id,
  type,
  photos,
  amenities,
  additional_info,
}: HotelRoomsInformationType) => {
  return (
    <CardSection container>
      <Grid item md={5}>
        <img src={photos[0]} alt={type} />
      </Grid>
      <CardContent item md={7} p={2}>
        <Typography component="h2" variant="h4" color="secondary">
          {type}
        </Typography>
        <Grid container>
          <Grid
            item
            md={6}
            p="16px"
            pl={0}
            sx={{ borderRight: "1px solid #e6e6e6" }}
          >
            <Typography component="h4" variant="body1" py="16px">
              Room facilities
            </Typography>
            {amenities.map((item) => {
              return <Chip label={item} variant="filled" />;
            })}
          </Grid>
          <Grid item md={6} p="16px">
            <Typography component="h4" variant="body1" py="16px">
              Further information
            </Typography>
            {additional_info.map((item) => {
              return <Chip label={item} variant="filled" />;
            })}
            <Link to={`/rooms/${id}`}>
              <ContentButton
                text="View and reserve"
                variant="contained"
                size="medium"
                color="info"
                fullWidth
              />
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </CardSection>
  );
};
