import { dispatch } from "setup/store"
import { setHotelRoomsAction, setNavbarLinksAction, setRoomsTypeAction } from "scenes/_slice/home.slice"
import { HotelRooms, RoomsTypes, links } from "./mock"
import { setRoomsListAction } from "scenes/_slice/rooms.slice"
import { setListAction } from "scenes/_slice/single_Room.slice"


export const getHomePageData = () => {
  dispatch(setNavbarLinksAction(links))
  dispatch(setRoomsTypeAction(RoomsTypes))
  dispatch(setHotelRoomsAction(HotelRooms))
  dispatch(setRoomsListAction(HotelRooms))
  dispatch(setListAction(HotelRooms))
}

export const initializeAppData = () => {
  getHomePageData()
}
