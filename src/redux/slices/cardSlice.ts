import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ProductInterface } from "../../page/body/components/interface";

interface CardStateInterface {
  products: ProductInterface[];
  count: number;
}

const initialState: CardStateInterface = {
  products: [],
  count: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setProductItem: (state, action: PayloadAction<ProductInterface>) => {
      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (productIndex > -1) {
        state.products[productIndex].count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    setRemoveProductItem(state, action) {
      state.products = state.products.filter(
        (productItem) => productItem.id !== action.payload
      );
    },
  },
});

export const { setProductItem, setRemoveProductItem } = cardSlice.actions;

export const selectProduct = (state: RootState) => state.card.products;
