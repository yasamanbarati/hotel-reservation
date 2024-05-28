import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FooterLinksType,
  HotelRoomsInformationType,
  NavbarLinksType,
  RoomsTypesProps,
} from "./type";

interface ReduxBodyType {
  NavbarLinks: NavbarLinksType[];
  FooterLinks : FooterLinksType[],
  RoomsType: RoomsTypesProps[];
  HotelRooms: HotelRoomsInformationType[];
  FilterHotelRooms: HotelRoomsInformationType[];
  CategoryName: string | RoomsTypesProps | undefined;
}

const initialState: ReduxBodyType = {
  NavbarLinks: [],
  FooterLinks: [],
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

const setFooterLinks = (
  state: ReduxBodyType,
  action: PayloadAction<FooterLinksType[]>
) => {
  state.FooterLinks = action.payload;
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
  state.CategoryName = state.RoomsType.find(
    (item) => item.id === action.payload
  )?.title;
  
  state.FilterHotelRooms = state.HotelRooms.filter((item) => {
    return item.type === state.CategoryName;
  });
};

const HomeSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    setNavbarLinks,
    setRoomsType,
    setHotelRooms,
    setFilterHotelRooms,
    setFooterLinks
  },
});

export const {
  setNavbarLinks: setNavbarLinksAction,
  setRoomsType: setRoomsTypeAction,
  setHotelRooms: setHotelRoomsAction,
  setFilterHotelRooms: setFilterHotelRoomsAction,
  setFooterLinks: setFooterLinksAction
} = HomeSlice.actions;

export default HomeSlice.reducer;
