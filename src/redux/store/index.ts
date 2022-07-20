import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import productReducer from "../products/slice";

const combineReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
});

const reducer = (
    state: ReturnType<typeof combineReducer>,
    action: AnyAction
) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    }
    return combineReducer(state, action);
};

export const makeStore = () =>
    configureStore({
        reducer,
    });

export const wrapper = createWrapper(makeStore);

type Store = ReturnType<typeof makeStore>;

export type RootState = Store["getState"];
export type AppDispatch = Store["dispatch"];
