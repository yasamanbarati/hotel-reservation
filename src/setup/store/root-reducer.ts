import { combineReducers } from "@reduxjs/toolkit"
import homeSlice from "scenes/_slice/home.slice"

const rootReducer = combineReducers({
  home: homeSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
