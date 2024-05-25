import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HotelRoomsInformationType,
  NavbarLinksType,
  RoomsTypesProps,
} from "./type";

interface ReduxBodyType {
  NavbarLinks: NavbarLinksType[];
  RoomsType: RoomsTypesProps[];
  HotelRooms: HotelRoomsInformationType[];
  FilterHotelRooms: HotelRoomsInformationType[];
  CategoryName: string | RoomsTypesProps | undefined;
}

const initialState: ReduxBodyType = {
  NavbarLinks: [],
  RoomsType: [],
  HotelRooms: [],
  FilterHotelRooms: [],
  CategoryName: "",
};

const setNavbarLinks = (
  state: ReduxBodyType,
  action: PayloadAction<NavbarLinksType[]>
) => {
  state.NavbarLinks = action.payload;
};

const setRoomsType = (
  state: ReduxBodyType,
  action: PayloadAction<RoomsTypesProps[]>
) => {
  state.RoomsType = action.payload;
};

const setHotelRooms = (
  state: ReduxBodyType,
  action: PayloadAction<HotelRoomsInformationType[]>
) => {
  state.HotelRooms = action.payload;
};

const setFilterHotelRooms = (
  state: ReduxBodyType,
  action: PayloadAction<number>
) => {
  state.FilterHotelRooms = state.HotelRooms;

  state.CategoryName = state.RoomsType.find(
    (item) => item.id === action.payload
  )?.title;
  
  state.FilterHotelRooms = state.HotelRooms.filter((item) => {
    return item.type == state.CategoryName;
  });
  console.log(state.FilterHotelRooms);
  
};

const HomeSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    setNavbarLinks,
    setRoomsType,
    setHotelRooms,
    setFilterHotelRooms,
  },
});

export const {
  setNavbarLinks: setNavbarLinksAction,
  setRoomsType: setRoomsTypeAction,
  setHotelRooms: setHotelRoomsAction,
  setFilterHotelRooms: setFilterHotelRoomsAction,
} = HomeSlice.actions;

export default HomeSlice.reducer;
