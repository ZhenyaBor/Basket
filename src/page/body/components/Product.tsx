/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useProduct } from "./hooks/useProduct";
import { ProductInterface } from "./interface";
import { ButtonAdd } from "./ButtonAdd";

interface Props {
  product: ProductInterface[];
}

export const Product = () => {
  const { product }: Props = useProduct();

  return (
    <>
      {product.map((product) => (
        <Card key={product.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${product.images[0]}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              fontFamily: "Raleway",
              justifyContent: "space-around",
            }}
          >
            <p
              css={css`
                font-size: 17px;
                font-weight: 700;
              `}
            >
              {product.price}
              <span>$</span>
            </p>
            <ButtonAdd product={product} />
          </CardActions>
        </Card>
      ))}
    </>
  );
};
