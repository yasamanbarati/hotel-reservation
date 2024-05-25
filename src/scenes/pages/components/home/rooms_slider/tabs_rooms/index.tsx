import { Tab, Tabs, Typography, styled, tabsClasses } from "@mui/material";
import { useAppSelector } from "setup/store/react-hooks";

interface Props {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const PanelsRooms = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",
  margin: "24px 0",
  "& .MuiTabs-root": {
    width: "100%",

    "& .MuiTabs-indicator": {
      display: "none",
    },

    "& .MuiTabs-flexContainer": {
      gap: "24px",
    },
    "& .MuiTab-root": {
      width: "250px",
      height: "85px",
      "& p": {
        color: theme.palette.dark.main,
      },
      "&.Mui-selected": {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: "8px",
      },
    },
  },
}));

export const TabsRoomsType = ({ value, handleChange }: Props) => {
  const data = useAppSelector((state) => state.home.RoomsType);
  return (
    <PanelsRooms>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {data.map((item) => {
          return (
            <Tab
              key={item.id}
              label={
                <>
                  <Typography component="h3" variant="body2">
                    {item.title}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    {item.text}
                  </Typography>
                </>
              }
              id={`simple-tabpanel-${item.title}`}
              aria-controls={`simple-tab-${item.title}`}
            />
          );
        })}
      </Tabs>
    </PanelsRooms>
  );
};
