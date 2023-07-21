import React from "react";
import "../styling/style.css";

const ListProducts = (props) => {
    const obj = props;
    const { products } = obj;
    if (!products) {
        return (
            <p className="no-data-msg">
                No data available
            </p>
        )
    }

    return (
        <>
            <div className="container">
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
                                        product.type === "Furniture" ? `Dimension: ${product.height}x${product.width}x${product.length}` : `Weight: ${product.weight}KG`
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ListProducts