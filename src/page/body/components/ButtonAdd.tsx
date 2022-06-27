import { Button } from "@mui/material";
import { useDispatch } from "react-redux"
import { setProductItem } from "../../../redux/slices/cardSlice"

interface Props { 
  product:{};
}

export const ButtonAdd = ({product}:Props) => {
  const dispatch = useDispatch();
  const addProduct = (e:any)=>{
    e.stopPropagation()
    dispatch(setProductItem(product))
    console.log(dispatch(setProductItem(product)))
  } 
    return (
        <Button
        variant="outlined"
        onClick={addProduct}
       >
         Add to basket
         </Button>
    );
  };
  