import axios from "axios";
import apiUrl from "../../apiUrl";

const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

export const getProductsAction = () => async (dispatch) => {
    const URL = `${apiUrl}/get-products`
    const response = await axios.get(URL);
    const data = await response.data;
    dispatch({ type: GET_PRODUCTS, payload: data });
}

export default productsReducer;