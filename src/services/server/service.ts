import { dispatch } from "setup/store"
import { setNavbarLinksAction } from "scenes/_slice/home.slice"
import { links } from "./mock"


export const getHomePageData = () => {
  dispatch(setNavbarLinksAction(links))
}

export const initializeAppData = () => {
  getHomePageData()
}
