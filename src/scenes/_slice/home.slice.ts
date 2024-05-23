import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NavbarLinksType } from './type'


interface ReduxBodyType {
  NavbarLinks: NavbarLinksType[]
}

const initialState: ReduxBodyType = {
  NavbarLinks : []
}

const setNavbarLinks = (
  state: ReduxBodyType,
  action: PayloadAction<NavbarLinksType[]>,
) => {
  state.NavbarLinks = action.payload
}

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setNavbarLinks
  },
})

export const {
  setNavbarLinks: setNavbarLinksAction
} = homeSlice.actions

export default homeSlice.reducer
