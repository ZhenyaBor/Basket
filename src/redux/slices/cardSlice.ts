import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CardStateInterface {
  products: string[];
}

// Define the initial state using that type
const initialState: CardStateInterface = {
  products: [],
};

export const cardSlice = createSlice({
  name: "card",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<string[]>) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { setProducts } = cardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.card.products;

export default cardSlice.reducer;
