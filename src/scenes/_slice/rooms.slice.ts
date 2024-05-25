import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HotelRoomsInformationType } from "./type";

interface ReduxBodyType {
  RoomsList: HotelRoomsInformationType[];
  CurrentRooms: HotelRoomsInformationType[];
}

const initialState: ReduxBodyType = {
  RoomsList: [],
  CurrentRooms: [],
};

const setRoomsList = (
  state: ReduxBodyType,
  action: PayloadAction<HotelRoomsInformationType[]>
) => {
  state.RoomsList = action.payload;
};

const setCurrentRooms = (
  state: ReduxBodyType,
  action: PayloadAction<number>
) => {
  const indexOfLastProduct = action.payload * 6;
  const indexOfFirstProduct = indexOfLastProduct - 6;
  state.CurrentRooms = state.RoomsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
};

const RoomsSlice = createSlice({
  name: "RoomsState",
  initialState,
  reducers: { setRoomsList, setCurrentRooms },
});

export const {
  setRoomsList: setRoomsListAction,
  setCurrentRooms: setCurrentRoomsAction,
} = RoomsSlice.actions;

export default RoomsSlice.reducer;
