import { useState } from "react";
import { css } from "@emotion/react";

import Switch from "./Switch.jsx";

const AdultSwitch = () => {
  const [adultToggle, setAdultToggle] = useState(false);

  const handleAdultToggle = () => {
    console.log(adultToggle);
    setAdultToggle(!adultToggle);
  };

  return (
    <div
      css={css`
        display: inline-block;
        padding-left: 1.3rem;
        padding-top: 1rem;
      `}
    >
      <Switch checked={adultToggle} handleChecked={handleAdultToggle} />
    </div>
  );
};

export default AdultSwitch;
