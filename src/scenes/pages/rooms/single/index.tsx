import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Box, Container, Grid, Input, Typography, styled } from "@mui/material";

import { dispatch } from "setup/store";
import { useAppSelector } from "setup/store/react-hooks";
import {
  setDecrementQuantityAction,
  setIncrementQuantityAction,
  setSingleRoomInformationAction,
} from "scenes/_slice/single_Room.slice";

import Layout from "scenes/pages/layout";

import { IntroductionSection } from "./introduction_section";
import { SwiperImages } from "./swiper_Images";
import { ContentButton } from "components/button/content_button/content_button";

const CardBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "400px",
  borderRadius: "16px",
  padding: "16px",
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.neutral.main,
  boxShadow: `0 4px 4px 0 ${theme.palette.neutral.dark}`,
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
const CapacityDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& button": {
    fontSize: "1.5rem",
  },
  "& input": {
    textAlign: "center",
  },
}));
const PaymentDiv = styled("div")(({ theme }) => ({
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
  },
  "& div:last-child": {
    borderTop: `1px solid ${theme.palette.neutral.dark}`,
  },
}));

const SingleRoom = () => {
  const { id } = useParams();

  const data = useAppSelector(
    (state) => state.singleRoom.SingleRoomInformation
  );

  useEffect(() => {
    dispatch(setSingleRoomInformationAction(Number(id)));
  }, [id]);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: "110px", md: "150px" } }}>
        <Typography component="h2" variant="h2" textAlign="center" mb={3}>
          {data?.type}
        </Typography>

        <SwiperImages data={data} />

        <Grid container spacing={2} mb={3}>
          <IntroductionSection data={data} />

          <Grid item md={5} xs={12}>
            <CardBox>
              <Typography component="p" variant="body2" textAlign={"left"}>
                Price starts from: {data?.price}
                <span>/ every night</span>
              </Typography>
              <div>
                <CapacityDiv>
                  <ContentButton
                    size="small"
                    variant="contained"
                    text="-"
                    color="error"
                    // onClick={}
                  />
                  <Input
                    defaultValue={`${data?.capacity?.basic} people`}
                    inputProps={{ "aria-label": "description" }}
                  />
                  <ContentButton
                    size="small"
                    variant="contained"
                    text="+"
                    color="success"
                  />
                </CapacityDiv>
              </div>
              <Link to={"/"}>
                <ContentButton
                  size="medium"
                  variant="contained"
                  text="Register a reservation"
                  color="secondary"
                  fullWidth
                />
              </Link>
              <PaymentDiv>
                <div>
                  <Typography component="p" variant="body1">
                    nights stay
                  </Typography>
                  <Typography component="p" variant="body1">
                    {data?.price}
                  </Typography>
                </div>
                <div>
                  <Typography component="p" variant="body1">
                    Sum of discounts
                  </Typography>
                  <Typography component="p" variant="body1">
                    $50
                  </Typography>
                </div>
                <div>
                  <Typography component="p" variant="body1">
                    Total amount payable
                  </Typography>
                  <Typography component="p" variant="body1">
                    {data?.price}
                  </Typography>
                </div>
              </PaymentDiv>
            </CardBox>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default SingleRoom;
