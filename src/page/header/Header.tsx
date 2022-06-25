/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { ItemBasket } from "./ItemBasket";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      css={css`
        width: 100%;
        background-color: hsla(120, 60%, 70%, 0.3);
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}
    >
      <div></div>
      <div
        css={css`
          position: relative;
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
        <BsFillBasketFill
          onClick={() => {
            setOpen(true);
            if (open) {
              setOpen(false);
            }
          }}
        ></BsFillBasketFill>
        {open ? <ItemBasket /> : null}
      </div>
    </header>
  );
};
