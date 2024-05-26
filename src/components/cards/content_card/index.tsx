import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, Typography, styled } from "@mui/material";
import { ContentButton } from "components/button/content_button/content_button";
import { Link } from "react-router-dom";
import { HotelRoomsInformationType } from "scenes/_slice/type";

const CardBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "500px",
  borderRadius: "16px",
  padding: "16px",
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.neutral.main,
  boxShadow: `0 4px 4px 0 ${theme.palette.neutral.dark}`,
  "& img": {
    width: "100%",
    height: "225px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  "& span": {
    fontSize: "0.75rem",
    lineHeight: "180%",
    fontWeight: "500",
    marginRight: "6px",
  },
  "& p": {
    fontSize: "0.875rem",
    lineHeight: "180%",
    fontWeight: "600",
    margin: 0,
    marginRight: "6px",
  },
}));

const LabelOption = styled('div')(({theme})=>({
backgroundColor: theme.palette.primary.light,
padding: '12px',
borderRadius : '8px',
  "& p": {
    fontSize: "0.8rem",
    lineHeight: "100%",
    fontWeight: "500",
    margin: 0,
    marginRight: "6px",
  },
}))

export const ContentCard = ({
  id,
  photos,
  type,
  price,
  capacity,
}: HotelRoomsInformationType) => {
  return (
    <CardBox>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        color="error"
        sx={{ position: "absolute" }}
      />
      <img src={photos[0]} alt={type} />
      <Typography component="h2" variant="h4">
        {type}
      </Typography>
      <div>
        <span>
          <strong> {capacity?.basic} </strong>person +{" "}
          <strong>{capacity?.additional}</strong> additional person
        </span>
        <p>
          Price starts from: {price}
          <span>/ every night</span>
        </p>
      </div>

      <LabelOption>
        <p>Your payment (3 nights - 2 people): <strong>$555</strong></p>
      </LabelOption>

      <Link to={`/rooms/${id}`}>
        <ContentButton
          size="medium"
          variant="outlined"
          text="View and reserve"
          color="secondary"
          fullWidth
        />
      </Link>
    </CardBox>
  );
};
