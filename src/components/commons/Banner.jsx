import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Wrapper from "./Wrapper";
import "swiper/css";

const bannerBlockWrapper = (backgroundColor) => css`
  background-color: ${backgroundColor};
`;

const bannerImg = css`
  width: 100%;
`;

const bannerStyle = {
  width: "100%",
};

const Banner = () => {
  const banners = [
    {
      id: 1,
      imgSrc:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/mainbnr_autumn_pc_221003.jpg",
      backgroundColor: "rgb(242, 216, 192)",
    },
    {
      id: 2,
      imgSrc:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/mainbnr_son_pc_220927_2.jpg",
      backgroundColor: "rgb(16, 17, 37)",
    },
    {
      id: 3,
      imgSrc:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/mainbnr_son_pc_220929.png",
      backgroundColor: "rgb(6, 0, 34)",
    },
    {
      id: 4,
      imgSrc:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/mainbnr_son_pc_220930.jpg",
      backgroundColor: "rgb(0, 0, 0)",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      style={bannerStyle}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <Wrapper css={bannerBlockWrapper(banner.backgroundColor)}>
            <Link to={""}>
              <img css={bannerImg} src={banner.imgSrc} />
            </Link>
          </Wrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
