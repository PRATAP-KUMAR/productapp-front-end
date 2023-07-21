import React, { useState } from "react";
import helperFunction from "../errorEliminator";
import Book from "./forms/Book";
import Dvd from "./forms/Dvd";
import Furniture from "./forms/Furniture";

function AddProduct(props) {
    const [subFormId, setSubFormId] = useState('*')

    const obj = props;
    const { handleChange } = obj;

    const onChange = (e) => {
        setSubFormId(e.target.value);
        handleChange(e);
        helperFunction();
    }
    
    return (
        <form id="product_form" name="product_form">
            <fieldset>
                <div className="container-add-product">
                    <div className="form-group">
                        <label htmlFor="sku">SKU</label>
                        <input
                            type="text"
                            placeholder="#sku"
                            id="sku"
                            name="sku"
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="#name"
                            id="name"
                            name="name"
                            onChange={handleChange}
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            min={1}
                            placeholder="#price"
                            id="price"
                            name="price"
                            onChange={handleChange}
                        />
                        <label htmlFor="Type Switcher">Type Switcher</label>
                        <select
                            name="type"
                            id="productType"
                            className="select"
                            defaultValue={"*"}
                            onChange={onChange}
                        >
                            <option value="*" disabled>Type Switcher</option>
                            <option value="DVD">DVD-Disc</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Book">Book</option>
                        </select>
                    </div>
                    {
                        subFormId === 'DVD' ? <Dvd handleChange={handleChange} /> :
                            subFormId === 'Furniture' ? <Furniture handleChange={handleChange} /> :
                                subFormId === 'Book' ? <Book handleChange={handleChange} /> : null
                    }
                </div >
            </fieldset>
        </form>
    )
}

export default AddProduct;