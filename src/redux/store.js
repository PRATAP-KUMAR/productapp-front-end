import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products/productsReducer";

const reducer = combineReducers({ productsReducer });
const store = configureStore({ reducer });

export default store;