/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";
import { ProductItemBasket } from "./ProductItemBasket";

export const ItemBasket = () => {
  const item = useAppSelector((state) => {
    return state.card.products;
  });
  const totalPrice = item.reduce(
    (acc, element) => (acc += element.count * element.price),
    0
  );
  return (
    <motion.div
      initial={{
        y: 50,
        visibility: "hidden",
        opacity: 0,
      }}
      animate={{
        y: 0,
        visibility: "visible",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
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
      <div
        css={css`
          overflow: auto;
          width: 100%;
          height: 100%;
        `}
      >
        <p
          css={css`
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 10px 0;
          `}
        >
          Общая сумма товара :{totalPrice}
        </p>

        {item.map((product, index) => (
          <ProductItemBasket key={index} product={product} />
        ))}
      </div>
    </motion.div>
  );
};
