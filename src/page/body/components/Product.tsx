/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductInterface } from "./interface";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const Product = () => {
  const [product, setProduct] = useState([] as ProductInterface[]);

  console.log(product);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  return (
    <>
      {product.map((da) => (
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image={`${da.images[0]}`} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {da.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {da.description}
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
              {da.price}
              <span>$</span>
            </p>
            <button
              css={css`
                font-size: 17px;
                font-weight: 700;
                width: 50%;
              `}
            >
              buy
            </button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
