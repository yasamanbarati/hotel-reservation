import { useEffect } from "react";
import { dispatch } from "setup/store";
import {
  setFooterLinksAction,
  setHotelRoomsAction,
  setNavbarLinksAction,
  setRoomsTypeAction,
} from "scenes/_slice/home.slice";
import { HotelRooms, RoomsTypes, footerLinks, links } from "./mock";
import { setRoomsListAction } from "scenes/_slice/rooms.slice";
import { setListAction } from "scenes/_slice/single_Room.slice";

export const getHomePageData = () => {
  dispatch(setNavbarLinksAction(links));
  dispatch(setRoomsTypeAction(RoomsTypes));
  dispatch(setHotelRoomsAction(HotelRooms));
  dispatch(setRoomsListAction(HotelRooms));
  dispatch(setListAction(HotelRooms));
  dispatch(setFooterLinksAction(footerLinks));
};

export const useInitializeAppData = () => {
  useEffect(() => {
    getHomePageData()
  }, [])
};
