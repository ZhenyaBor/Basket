/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  open: any;
}

export const ItemBasket = ({ open }: Props) => {
  return (
    <div
      onMouseOut={(e) => {
        if (e.target) {
          setTimeout(() => {
            open(false);
          }, 1000);
        }
      }}
      css={css`
        width: 450px;
        height: 500px;
        background-color: red;
        padding: 10px;
      `}
    >
      Тестовый блок для товаров в корзине
    </div>
  );
};
