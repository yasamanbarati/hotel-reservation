
import Layout from "./layout"
import { initializeAppData } from "../../services/server/service"
import { Container } from "@mui/material"
import { CoverSection } from "./components/home/cover_section"
import { Introduction } from "./components/home/introduction_section"
import { RoomsSlider } from "./components/home/rooms_slider"


export const Root = () => {
  initializeAppData()
  return <>
    <Layout>
      <Container maxWidth='lg' sx={{marginTop:'150px'}}>
        <CoverSection />
        <Introduction />
        <RoomsSlider />
      </Container>
    </Layout>
  </>
}
