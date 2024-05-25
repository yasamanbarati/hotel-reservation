import { Typography } from "@mui/material";
import { TabsRoomsType } from "./tabs_rooms";
import { Slider } from "./slider";
import { useEffect, useState } from "react";
import { useAppSelector } from "setup/store/react-hooks";
import { dispatch } from "setup/store";
import { setFilterHotelRoomsAction } from "scenes/_slice/home.slice";

export const RoomsSlider = () => {
  const data = useAppSelector((state) => state.home.FilterHotelRooms);

  const [value, setValue] = useState<number>(1);
  useEffect(() => {
    dispatch(setFilterHotelRoomsAction(value));
  }, [value]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography component="h2" variant="h2" textAlign="center">
        Rooms and suites
      </Typography>
      <TabsRoomsType value={value} handleChange={handleChange} />
      <Slider value={value} />
    </>
  );
};
