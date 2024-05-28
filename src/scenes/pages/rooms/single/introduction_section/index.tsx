import { Grid, Typography, styled } from "@mui/material";
import { HotelRoomsInformationType } from "scenes/_slice/type";

import { CapacityIcon, HomeIcon, ServicesIcon } from "components/icons";

interface Props {
    data :  HotelRoomsInformationType | undefined
}

const MainInformationDiv = styled("div")(({ theme }) => ({
    paddingBottom: "12px",
    "& svg": {
      width: "32px",
      height: "32px",
    },
    "& span": {
      fontSize: "0.86rem",
      lineHeight: "180%",
      fontWeight: "600",
    },
  }));
export const IntroductionSection = ({data}:Props) => {
  return (
    <Grid item md={7} xs={12}>
      <Typography
        component="h3"
        variant="h5"
        color="primary"
        mb={3}
        py={2}
        borderBottom={"1px solid #e6e6e6"}
      >
        General characteristics
      </Typography>

      <MainInformationDiv>
        <HomeIcon width="32px" height="32px" />
        <span>
          {" "}
          <strong>About the room : </strong>
          {data?.additional_info.join(" , ")}
        </span>
      </MainInformationDiv>

      <MainInformationDiv>
        <CapacityIcon width="32px" height="32px" />
        <span>
          {" "}
          <strong>Capacity : </strong>
          {data?.additional_info[2]} {"("}
          {data?.capacity?.basic + " basic person"} {" + "}
          {data?.capacity?.additional + " additional person"}
          {")"}
        </span>
      </MainInformationDiv>

      <MainInformationDiv>
        <ServicesIcon width="32px" height="32px" />
        <span>
          {" "}
          <strong>Sleeping services : </strong>
          {data?.amenities.join(" , ")}
        </span>
      </MainInformationDiv>

      <Typography
        component="h3"
        variant="h5"
        color="primary"
        py={2}
        borderBottom={"1px solid #e6e6e6"}
      >
        About this place
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="dark"
        textAlign="left"
        py={2}
      >
        {data?.description}
      </Typography>
      
    </Grid>
  );
};
