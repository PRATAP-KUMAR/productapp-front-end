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
    let data;
    axios.get(URL)
        .then(response => {
            data = response.data;
            dispatch({ type: GET_PRODUCTS, payload: data });
        })
        .catch(error => {
            dispatch({ type: GET_PRODUCTS, payload: error.message });
        })
}

export default productsReducer;