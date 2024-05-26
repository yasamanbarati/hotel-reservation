import { combineReducers } from "@reduxjs/toolkit"
import HomeSlice from "scenes/_slice/home.slice"
import roomsSlice from "scenes/_slice/rooms.slice"
import single_RoomSlice from "scenes/_slice/single_Room.slice"

const rootReducer = combineReducers({
  home: HomeSlice,
  rooms: roomsSlice,
  singleRoom : single_RoomSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
