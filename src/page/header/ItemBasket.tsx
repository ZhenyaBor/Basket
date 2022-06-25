/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ItemBasket = () => {
  return (
    <div
      css={css`
        width: 300px;
        height: 400px;
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        position: absolute;
        top: 61px;
        right: 0;
        z-index: 1;
        ::before {
          content: "";
          position: absolute;
          right: 25px;
          top: -20px;
          border: 10px solid transparent;
          border-top: 10px solid white;
          transform: rotate(180deg);
        }
      `}
    >
      <h1>Блок для продуктов в корзине</h1>
    </div>
  );
};
