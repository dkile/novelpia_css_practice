import { css } from "@emotion/react";

import assets from "../../config/assets";
import Wrapper from "../commons/Wrapper";
import ServiceNavItem from "./ServiceNavItem";

const serviceNavWrapper = css`
  background-color: #fafafa;
`;

const serviceNavBlock = css`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`;

const ServiceNav = () => {
  const { plusShop, prime, atelier, attendance, arena, audio } = assets;

  return (
    <Wrapper css={serviceNavWrapper}>
      <div css={serviceNavBlock}>
        <ServiceNavItem
          url={plusShop.url}
          label={plusShop.label}
          imgSrc={plusShop.imgSrc}
        />
        <ServiceNavItem
          url={prime.url}
          label={prime.label}
          imgSrc={prime.imgSrc}
        />
        <ServiceNavItem
          url={atelier.url}
          label={atelier.label}
          imgSrc={atelier.imgSrc}
        />
        <ServiceNavItem
          url={attendance.url}
          label={attendance.label}
          imgSrc={attendance.imgSrc}
        />
        <ServiceNavItem
          url={arena.url}
          label={arena.label}
          imgSrc={arena.imgSrc}
        />
        <ServiceNavItem
          url={audio.url}
          label={audio.label}
          imgSrc={audio.imgSrc}
        />
      </div>
    </Wrapper>
  );
};

export default ServiceNav;
