import { useState } from "react";

import Switch from "./Switch.jsx";

const AdultSwitch = () => {
  const [adultToggle, setAdultToggle] = useState(false);

  const handleAdultToggle = () => {
    console.log(adultToggle);
    setAdultToggle(!adultToggle);
  };

  return <Switch checked={adultToggle} handleChecked={handleAdultToggle} />;
};

export default AdultSwitch;
