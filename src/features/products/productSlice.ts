import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchAllProducts = createAsyncThunk(
    "product/fetchAllProducts",
    async () => {
        const response = await axios.get("http://localhost:5000/products");
        return response.data;
    }
);

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
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.products.concat(action.payload);
        });
    },
});

export default productSlice.reducer;

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:5000",
//     }),
//     endpoints(builder) {
//         return {
//             fetchProducts: builder.query<Product[], string | void>({
//                 query(path) {
//                     return `/${path}`;
//                 },
//             }),
//         };
//     },
// });

// export const { useFetchProductsQuery } = apiSlice;
