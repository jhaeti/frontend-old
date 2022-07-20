import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./asyncThunk";

type Product = {
    ns: number;
    _id: string;
    price: 3.2;
    name: "Banku";
    quantity: 10;
    description: "This one of the most liked food in Ghana";
    date: string;
    __v: number;
};

interface ProductState {
    loading: "idle" | "pending" | "succeeded" | "failed";
    products: Product[] | [];
}

const initialState: ProductState = {
    loading: "idle",
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = "pending";
        });

        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return {
                loading: "succeeded",
                products: state.products.concat(action.payload),
            };
        });
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = "failed";
        });
    },
});

export default productSlice.reducer;
