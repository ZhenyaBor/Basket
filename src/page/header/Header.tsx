/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BsFillBasketFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header
      css={css`
        width: 100%;
        background-color: grey;
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}
    >
      <div></div>
      <div
        css={css`
          svg {
            width: 30px;
            height: 50px;
            cursor: pointer;
            position: absolute;
            right: 20px;
            :hover {
              color: red;
              transition: all 0.5s;
            }
          }
        `}
      >
        <BsFillBasketFill></BsFillBasketFill>
      </div>
    </header>
  );
};
