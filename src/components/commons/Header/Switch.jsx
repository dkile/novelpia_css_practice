import { css } from "@emotion/react";

const Switch = ({ checked, handleChecked }) => {
  const slider = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6.4rem;
    background-color: #cfcfcf;
    transition: all 0.3s ease-in-out;
    &::before {
      content: "19";
      font-size: 1.1rem;
      font-weight: 600;
      color: #9c9c9c;
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      padding-left: 0.2rem;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 1.4rem;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
    }
  `;

  const checkedSlider = css`
    ${slider};
    background-color: #7732ff;
    &::before {
      transform: translateX(2rem);
      color: #7732ff;
    }
  `;

  const switchLabel = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.1rem;
    font-family: sans-serif;
    transition: all 0.3s ease-in-out;
    &::after {
      content: attr(data-off);
      font-weight: 600;
      position: absolute;
      top: 0.4rem;
      right: 0.4rem;
      color: #9c9c9c;
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    &::before {
      content: attr(data-on);
      font-weight: 600;
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      color: #fff;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
  `;

  const checkedSwitchLabel = css`
    ${switchLabel};
    &::after {
      opacity: 0;
    }
    &::before {
      opacity: 1;
    }
  `;

  return (
    <div
      css={css`
        position: relative;
        display: inline-block;
        width: 4.4rem;
        height: 2.4rem;
        border-radius: 6.4rem;
        cursor: pointer;
      `}
      onClick={handleChecked}
    >
      <span css={checked ? checkedSlider : slider}></span>
      <span
        css={checked ? checkedSwitchLabel : switchLabel}
        data-on="ON"
        data-off="OFF"
      ></span>
    </div>
  );
};

export default Switch;
