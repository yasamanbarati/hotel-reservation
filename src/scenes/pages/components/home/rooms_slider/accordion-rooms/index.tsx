import { styled } from "@mui/material"
import { Panel } from "./panel"

const PanelsRooms = styled('div')(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    gap:'24px',
}))

export const AccordionRooms = () => {
  return (
    <PanelsRooms>
        <Panel expandedName={"panel1"} ariaControls={"panel1-control"} panelId={"panel1-id"} >
            <h2>p11</h2>
        </Panel>
    </PanelsRooms>
  )
}