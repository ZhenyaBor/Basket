/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { ItemBasket } from "./ItemBasket";
import { useAppSelector } from "../../redux/hooks";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const item = useAppSelector((state) => {
    return state.card.products;
  });

  let count = 0;

  if (item.length > 0) {
    count = item.length;
  }

  return (
    <header
      css={css`
        width: 100%;
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(39, 41, 120, 1) 35%,
          rgba(0, 212, 255, 1) 100%
        );
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
            position: relative;
            float: right;
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
        {count > 0 ? (
          <div
            css={css`
              width: 15px;
              height: 15px;
              position: absolute;
              background-color: white;
              right: 20px;
              top: 8px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 10px;
              font-weight: bold;
            `}
          >
            <div>{count}</div>
          </div>
        ) : null}
        {item.length > 0 && open ? <ItemBasket /> : null}
      </div>
    </header>
  );
};
