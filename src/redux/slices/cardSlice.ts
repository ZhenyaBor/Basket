import { Product } from "./../../page/body/components/Product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CardStateInterface {
  products: string[];
}

const initialState: CardStateInterface = {
  products: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setProductItem: (state, action: PayloadAction<any>) => {
      const productIndex = state.products.findIndex(
        ({ id }: any) => id === action.payload.id
      );
      const prod: any = state.products[productIndex];

      if (productIndex > -1) {
        state.products[productIndex] = {
          ...prod,
          count: prod.count ? prod.count + 1 : 0,
        };
        return state;
      }
      action.payload.count = 1;
      state.products.push(action.payload);
    },
  },
});

export const { setProductItem } = cardSlice.actions;

export const selectProduct = (state: RootState) => state.card.products;
