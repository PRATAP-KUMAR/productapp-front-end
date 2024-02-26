import React, { useEffect } from "react";
import { getProductsAction } from "../redux/products/productsReducer";
import { useDispatch, useSelector } from "react-redux";
import "../styling/style.css";

const ListProducts = () => {
    const products = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction());
    }, [dispatch, products.length]);

    return (
        <div id="container" className="container">
            {
                products.map((product) => (
                    <div className="show-card" key={product.id}>
                        <input type="checkbox" className="delete-checkbox" id={product.id} />
                        <br />
                        <div className="card-contents">
                            <p className="uppercase">{product.sku}</p>
                            <p>{product.name}</p>
                            <p>{product.price} $</p>
                            {
                                product.type === "DVD" ? `Size: ${product.size} MB` :
                                    product.type === "Furniture" ? `Dimension: ${product.height}x${product.width}x${product.length}` :
                                        `Weight: ${product.weight}KG`
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListProducts;