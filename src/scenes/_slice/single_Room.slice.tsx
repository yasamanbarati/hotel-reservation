import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HotelRoomsInformationType } from "./type";

interface ReduxBodyType {
  List: HotelRoomsInformationType[];
  SingleRoomInformation: HotelRoomsInformationType | undefined;
  sumPrice: number,
}

const initialState: ReduxBodyType = {
  List: [],
  SingleRoomInformation: {
    id: 0,
    type: "",
    amenities: [],
    additional_info: [],
    photos: [],
    price: "",
    description: "",
    reserved_dates: [],
    capacity: {
      basic: 0,
      additional: 0,
    },
  },
  sumPrice: 0,
};

const setList = (
  state: ReduxBodyType,
  action: PayloadAction<HotelRoomsInformationType[]>
) => {
  state.List = action.payload;
};
const setSingleRoomInformation = (
  state: ReduxBodyType,
  action: PayloadAction<number>
) => {
  state.SingleRoomInformation = state.List.find(
    (item) => item.id == action.payload
  );
};

const setIncrementQuantity = (state: ReduxBodyType, action: PayloadAction<number>) => {

};
const setDecrementQuantity = (state: ReduxBodyType, action: PayloadAction<number>) => {

};
const SingleRoomSlice = createSlice({
  name: "RoomsState",
  initialState,
  reducers: { setList, setSingleRoomInformation,setIncrementQuantity,setDecrementQuantity },
});

export const {
  setList: setListAction,
  setSingleRoomInformation: setSingleRoomInformationAction,
  setIncrementQuantity: setIncrementQuantityAction,
  setDecrementQuantity: setDecrementQuantityAction,
} = SingleRoomSlice.actions;

export default SingleRoomSlice.reducer;
