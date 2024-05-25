import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useAppSelector } from "setup/store/react-hooks";
import { RoomCard } from "components/cards/room_card";
import { styled } from "@mui/material";

interface Props {
  value: number;
}
const SwiperSliderBox = styled(Swiper)(({ theme }) => ({
  marginBottom: "42px",
  "& .swiper-button-next": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme.palette.neutral.dark,
    "&:after":{
      fontSize : '1rem',
      color: theme.palette.dark.main,
    }
  },
  "& .swiper-button-prev": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme.palette.neutral.dark,
    "&:after":{
      fontSize : '1rem',
      color: theme.palette.dark.main,
    }
  },
}));

export const Slider = ({ value }: Props) => {
  const data = useAppSelector((state) => state.home.FilterHotelRooms);

  return (
    <SwiperSliderBox navigation={true} modules={[Navigation, Autoplay]}>
      {data.map((item, key) => {
        return (
          <div
            key={item.id}
            role="tabpanel"
            hidden={value !== value}
            aria-labelledby={`simple-tab-${item.type}`}
            id={`simple-tabpanel-${item.type}`}
          >
            {value == value && (
              <SwiperSlide key={item.id}>
                <RoomCard
                  id={item.id}
                  type={item.type}
                  amenities={item.amenities}
                  additional_info={item.additional_info}
                  photos={item.photos}
                />
              </SwiperSlide>
            )}
          </div>
        );
      })}
    </SwiperSliderBox>
  );
};
