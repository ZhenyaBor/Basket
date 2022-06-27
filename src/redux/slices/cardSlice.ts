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
      state.products.push(action.payload);
    },
  },
});

export const { setProductItem } = cardSlice.actions;

export const selectProduct = (state: RootState) => state.card.products;
