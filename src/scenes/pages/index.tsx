
import Layout from "./layout"
import { useInitializeAppData } from "../../services/server/service"
import { Container } from "@mui/material"
import { CoverSection } from "./components/home/cover_section"
import { Introduction } from "./components/home/introduction_section"
import { RoomsSlider } from "./components/home/rooms_slider"

const Root = () => {
  useInitializeAppData()


  return <>
    <Layout>
      <Container maxWidth='lg' sx={{marginTop:{xs:'110px',md:'150px'}}}>
        <CoverSection />
        <Introduction />
        <RoomsSlider />
      </Container>
    </Layout>
  </>
}

export default Root