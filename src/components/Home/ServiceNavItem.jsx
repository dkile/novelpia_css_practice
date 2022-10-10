import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const serviceIcon = css`
  width: 6rem;
  height: 6rem;
`;

const serviceIconWrapper = css`
  margin-bottom: 7px;
  border-radius: 50%;
  background-color: #ececec;
`;

const serviceLabel = css`
  font-size: 1.4rem;
  width: fit-content;
  margin: auto;
`;

const ServiceNavItem = ({ url, label, imgSrc }) => {
  return (
    <Link to={url}>
      <div css={serviceIconWrapper}>
        <img src={imgSrc} css={serviceIcon} />
      </div>
      <p css={serviceLabel}>{label}</p>
    </Link>
  );
};

export default ServiceNavItem;
