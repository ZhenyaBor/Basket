/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../body/components/interface";
import { useAppDispatch } from "../../redux/hooks";
import { setRemoveProductItem } from "../../redux/slices/cardSlice";

interface Props {
  product: ProductInterface;
}

export const ProductItemBasket = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const removeItemProduct = () => {
    dispatch(setRemoveProductItem(product.id));
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: centr;
        margin-bottom: 10px;
        height: 120px;
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
          {product.price}$
          <p
            css={css`
              margin: 5px 0 5px 10px;
              font-weight: bold;
              text-align: center;
            `}
          >
            Всего: {}
          </p>
        </div>
        <button
          css={css`
            float: right;
            margin-right: 10px;
          `}
          onClick={removeItemProduct}
        >
          удалить
        </button>
      </div>
    </div>
  );
};
