/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion"

export const ItemBasket = () => {
  return (
    <motion.div
    initial={{
      y:50,
      visibility:"hidden",
      opacity:0
    }}
    animate={{
        y: 0,
        visibility:"visible",
        opacity:1
      }}
    transition={{ 
      duration: 1,

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
      <h1>Блок для продуктов в корзине</h1>
    </motion.div>
  );
};
