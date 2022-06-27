import { Button } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { setProductItem } from "../../../redux/slices/cardSlice";

export const ButtonAdd = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const addProduct = () => {
    dispatch(setProductItem(product));
  };
  return (
    <Button variant="outlined" onClick={addProduct}>
      Add to basket
    </Button>
  );
};
