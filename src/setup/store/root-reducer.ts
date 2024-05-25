import { combineReducers } from "@reduxjs/toolkit"
import HomeSlice from "scenes/_slice/home.slice"
import roomsSlice from "scenes/_slice/rooms.slice"

const rootReducer = combineReducers({
  home: HomeSlice,
  rooms: roomsSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
