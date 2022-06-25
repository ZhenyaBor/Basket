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
          open(false);
        }
      }}
      css={css`
        width: 450px;
        height: 500px;
        background-color: red;
        padding: 10px;
      `}
    >
      ItemBasket
    </div>
  );
};
