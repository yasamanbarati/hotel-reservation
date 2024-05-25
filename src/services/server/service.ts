import { dispatch } from "setup/store"
import { setHotelRoomsAction, setNavbarLinksAction, setRoomsTypeAction } from "scenes/_slice/home.slice"
import { HotelRooms, RoomsTypes, links } from "./mock"
import { setRoomsListAction } from "scenes/_slice/rooms.slice"


export const getHomePageData = () => {
  dispatch(setNavbarLinksAction(links))
  dispatch(setRoomsTypeAction(RoomsTypes))
  dispatch(setHotelRoomsAction(HotelRooms))
  dispatch(setRoomsListAction(HotelRooms))
}

export const initializeAppData = () => {
  getHomePageData()
}
