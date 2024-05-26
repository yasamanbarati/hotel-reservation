import { useEffect, useState } from "react";
import { Container, Grid, Pagination, Typography, styled } from "@mui/material";

import Layout from "../layout";
import { useAppSelector } from "setup/store/react-hooks";
import { ContentCard } from "components/cards/content_card";
import { dispatch } from "setup/store";
import { setCurrentRoomsAction } from "scenes/_slice/rooms.slice";

const PaginationBox = styled(Pagination)(() => ({
  margin: "30px 0",
  "& .MuiPagination-ul": {
    justifyContent: "center",
    "& .MuiButtonBase-root": {
      minWidth: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem",
      lineHeight: "180%",
      fontWeight: "600",
    },
  },
}));

export const Rooms = () => {
  const data = useAppSelector((state) => state.rooms.RoomsList);
  const currentData = useAppSelector((state) => state.rooms.CurrentRooms);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setCurrentRoomsAction(currentPage));
  }, [currentPage]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: "110px", md: "150px" } }}>
        <Typography component="h2" variant="h2" textAlign="center" mb={3}>
          Rooms and suites
        </Typography>
        <Grid container spacing={2}>
          {currentData.map((item) => {
            return (
              <Grid key={item.id} item xs={12} tabletM={6} md={4}>
                <ContentCard
                  id={item.id}
                  type={item.type}
                  photos={item.photos}
                  price={item.price}
                  capacity={item.capacity} amenities={[]} additional_info={[]}                />
              </Grid>
            );
          })}
        </Grid>
        <PaginationBox
          count={Math.ceil(data.length / 6)}
          page={currentPage}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Container>
    </Layout>
  );
};
