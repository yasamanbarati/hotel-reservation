import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { styled } from "@mui/material";
import { HotelRoomsInformationType } from "scenes/_slice/type";

interface Props {
    data :  HotelRoomsInformationType | undefined
}

const SwiperSection = styled(Swiper)(({ theme }) => ({
  height: "500px",
  marginBottom: "4px",
  "& img": {
    width: "100%",
    height: "100%",
  },
  "& .swiper-button-next": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme.palette.neutral.dark,
    "&:after": {
      fontSize: "1rem",
      color: theme.palette.dark.main,
    },
  },
  "& .swiper-button-prev": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme.palette.neutral.dark,
    "&:after": {
      fontSize: "1rem",
      color: theme.palette.dark.main,
    },
  },
}));

export const SwiperImages = ({data}:Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SwiperSection
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Room Photos"
      >
        {data?.photos.map((item) => {
          return (
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + item}
                alt={`${data?.type} photo`}
              />
            </SwiperSlide>
          );
        })}
      </SwiperSection>
      <SwiperSection
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        sx={{ height: "200px", marginBottom: "42px" }}
      >
        {data?.photos.map((item) => {
          return (
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + item}
                alt={`${data?.type} photo`}
              />
            </SwiperSlide>
          );
        })}
      </SwiperSection>
    </>
  );
};
