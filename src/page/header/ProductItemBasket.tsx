/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../body/components/interface";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  product: ProductInterface;
}

export const ProductItemBasket = ({ product }: Props) => {
  const item = useAppSelector((state) => {
    return state.card.products;
  });

  return (
    <div
      css={css`
        display: flex;
        align-items: centr;
        margin-bottom: 10px;
        height: 100px;
        overflow: hidden;
        position: relative;
        border: solid 1px black;
      `}
    >
      <div>
        <img
          src={product.images[0]}
          alt="img"
          css={css`
            width: 120px;
            height: 100%;
          `}
        />
      </div>
      <div
        css={css`
          width: 100%;
        `}
      >
        <p
          css={css`
            text-align: center;
            font-weight: bold;
            margin: 0px;
          `}
        >
          {product.title}
        </p>
        <div
          css={css`
            margin: 5px 0 5px 10px;
            font-weight: bold;
            text-align: center;
          `}
        >
          {product.price * product.count}$<p>Всего: {product.count}</p>
        </div>
      </div>
    </div>
  );
};
