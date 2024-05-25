import { Typography, styled } from "@mui/material";
import { ContentButton } from "components/button/content_button/content_button";
import { Link } from "react-router-dom";
import { HotelRoomsInformationType } from "scenes/_slice/type";

const CardBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "500px",
  borderRadius: "16px",
  padding: "16px",
  gap: "24px",
  display: "flex",
  flexDirection: "column",
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
  "& div": {},
}));

export const ContentCard = ({
  id,
  photos,
  type,
  description,
}: HotelRoomsInformationType) => {
  return (
    <CardBox>
      <img src={photos[0]} alt={type} />
      <Typography component="h2" variant="h4">
        {type}
      </Typography>
      <Typography component="p" variant="body2" textAlign="left">
        {description}
      </Typography>

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
