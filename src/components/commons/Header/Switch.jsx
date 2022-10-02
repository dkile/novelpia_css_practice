import { css } from "@emotion/react";

const Switch = ({ checked, handleChecked }) => {
  const slider = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4rem;
    background-color: #cfcfcf;
    transition: all 0.4s ease-in-out;
    &::before {
      content: "19";
      font-size: 11px;
      position: absolute;
      top: 0.22rem;
      left: 0.22rem;
      width: 1rem;
      height: 1rem;
      border-radius: 0.7rem;
      background-color: #fff;
      transition: all 0.4s ease-in-out;
    }
  `;

  const checkedSlider = css`
    ${slider};
    background-color: #7732ff;
    &::before {
      transform: translateX(1.25rem);
    }
  `;

  const switchLabel = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 11px;
    font-family: sans-serif;
    transition: all 0.4s ease-in-out;
    &::after {
      content: attr(data-off);
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      color: #9c9c9c;
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    &::before {
      content: attr(data-on);
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
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
        width: 2.75rem;
        height: 1.5rem;
        border-radius: 4rem;
        cursor: pointer;
      `}
      onClick={handleChecked}
    >
      <input
        css={css`
          display: none;
        `}
        type="checkbox"
      />
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
