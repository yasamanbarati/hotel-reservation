import { useEffect, useState } from "react";
import { Container, Grid, Pagination, Typography, colors, styled } from "@mui/material";
import DatePicker from "react-datepicker";

import Layout from "../layout";
import { useAppSelector } from "setup/store/react-hooks";
import { ContentCard } from "components/cards/content_card";
import { dispatch } from "setup/store";
import { setCurrentRoomsAction } from "scenes/_slice/rooms.slice";

import "react-datepicker/dist/react-datepicker.css";

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
const FilterBox = styled(Grid)(({ theme }) => ({
  "& .react-datepicker": {
    backgroundColor: theme.palette.neutral.main,
    boxShadow: `0 0 4px 0 ${theme.palette.neutral.dark}`,
    borderRadius: "16px",
    border: "transparent",
    "& .react-datepicker__header": {
      backgroundColor: theme.palette.primary.light,
      borderBottomColor: theme.palette.primary.main,
      padding: "4px 0",
    },
    "& .react-datepicker__day--in-selecting-range": {
      backgroundColor: theme.palette.primary.light,
    },
    "& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range":
      {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.neutral.main,
      },
  },
}));

export const Rooms = () => {
  const data = useAppSelector((state) => state.rooms.RoomsList);
  const currentData = useAppSelector((state) => state.rooms.CurrentRooms);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
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
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: "110px", md: "150px" } }}>
        <Typography component="h2" variant="h2" textAlign="center" mb={3}>
          Rooms and suites
        </Typography>
        <FilterBox container spacing={2}>
          <Grid item md={5} xs={12}>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange
              inline
              showDisabledMonthNavigation
            />
          </Grid>
        </FilterBox>

        <Grid container spacing={2}>
          {currentData.map((item) => {
            return (
              <Grid key={item.id} item xs={12} tabletM={6} md={4}>
                <ContentCard
                  id={item.id}
                  type={item.type}
                  photos={item.photos}
                  price={item.price}
                  capacity={item.capacity}
                  amenities={[]}
                  additional_info={[]}
                />
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
