/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "../body/components/interface";

interface Props{
 product : ProductInterface;
}

export const ProductItemBasket = ({product:{title,images,price}}:any) => {

  return (
    <div
      css={css`
       display:flex;
       align-items:centr;
       margin-bottom:10px;
       height:100px;
       overflow: hidden;
       position: relative;
     `}
  >

    <div>
      <img src={images[0]} alt="img"
       
              css={css`
              width:120px;
            `}
    />
    </div>
    <div
                 css={css`
                 width:100%;
               `}
    ><p
              css={css`
              text-align:center;
              font-weight: bold;
               margin:0px;
            `}
    >{title}</p>

    <div
                        css={css`
                        margin:5px 0 5px 10px;
                        font-weight: bold;
                        text-align:center;
                      `}
    >{price}$</div>
    
    
    </div>
    </div>
  );
};