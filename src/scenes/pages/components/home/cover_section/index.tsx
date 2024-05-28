import { TextField, Typography, styled } from "@mui/material";
import { ContentButton } from "components/button/content_button/content_button";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CoverMainSection = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "22px",
  minHeight: "480px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "relative",
  "& img": {
    position: "absolute",
    width: "510px",
    height: "529px",
    bottom: "-4px",
    left: "0",
    objectFit: "none",
    borderRadius: "22px",
  },
  "& .cover-information": {
    marginRight: "50px",
  },

  [theme.breakpoints.down("laptop")]: {
    "& img": {
      width: "400px",
    },
    "& h1": {
      fontSize: "2rem",
    },
    "& h2": {
      fontSize: "1.5rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "50px",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& img": {
      width: "300px",
      height: "320px",
      objectFit: "cover",
      bottom: "-16px",
      left: "-18px",
    },
    "& .cover-information": {
      marginRight: "0",
    },
    "& h1": {
      fontSize: "1.86rem",
      textAlign: "center",
    },
    "& h2": {
      fontSize: "1.125rem",
      textAlign: "center",
    },
  },
  "& .MuiButtonBase-root": {
    width: "132px",
    height: "60px",
  },
}));
const PickerBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "16px",
  position: "absolute",
  bottom: "0",
  background: theme.palette.neutral.main,
  boxShadow: `0 4px 20px 0 ${theme.palette.neutral.dark}`,
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    height: "304px",
    gap: "12px",
    padding: "12px",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    width: "792px",
    height: "105px",
    gap: "16px",
    padding: "24px",
    flexDirection: "row",
  },
  "& .picker-inputs": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .react-datepicker-wrapper": {
      width: "150px",
      height: "60px",
      marginRight: '12px',
      "& .react-datepicker__input-container": {
        width: "100%",
        height: "100%",
      },
      "& input": {
        width: "100%",
        height: "100%",
        padding : '8px',
        border: "1px solid transparent",
        background: theme.palette.primary.light,
        borderRadius : '12px',
      },
    },
    "& .MuiFormControl-root": {
      width: "150px",
      height: "60px",
      "& .MuiInputBase-root": {
        width: "100%",
        height: "100%",
        "& input": {
          width: "100%",
          border: "1px solid transparent",
          background: theme.palette.primary.light,
          borderRadius: "12px",
        },
      },
    },
  },
}));
export const CoverSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  console.log(startDate);
  console.log(endDate);

  return (
    <CoverMainSection>
      <img
        src={process.env.PUBLIC_URL + "/images/hero-img.png"}
        alt="cover photo"
      />
      <div className="cover-information">
        <Typography component="h1" variant="h2" color="white">
          Parsian Azadi Hotel
        </Typography>

        <Typography component="h2" variant="h3" color="white" fontWeight="500">
          The first choice of dignitaries
        </Typography>
      </div>
      <PickerBox>
        <Typography component="h4" variant="body1" color="primary">
          <strong>Reservations</strong>
        </Typography>
        <div className="picker-inputs">
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="entry date"
            isClearable
          />
          <DatePicker
            selected={endDate}
            startDate={startDate}
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="departure date"
            isClearable
          />
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            placeholder="capacity"
          />
        </div>
        <ContentButton variant="contained" size={"small"} text="Search" />
      </PickerBox>
    </CoverMainSection>
  );
};
