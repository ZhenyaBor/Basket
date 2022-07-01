/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Footer = () => {
  return (
    <div
      css={css`
        background-color: white;
        height: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}
    ></div>
  );
};
