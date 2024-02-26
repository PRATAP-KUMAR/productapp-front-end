import React, { useState } from "react";
import Book from "./forms/Book";
import Dvd from "./forms/Dvd";
import Furniture from "./forms/Furniture";
import errorEliminator from "../errorEliminator";

function AddProduct() {
    const [subFormId, setSubFormId] = useState('*');

    errorEliminator();

    const onTypeSwitcherChange = (e) => {
        setSubFormId(e.target.value);
        errorEliminator();
    }

    return (
        <form id="product_form" name="product_form">
            <fieldset>
                <legend>FORM</legend>
                <div className="container-add-product">
                    <div className="form-group">
                        <div>
                            <label htmlFor="sku">SKU</label>
                            <input
                                type="text"
                                placeholder="#sku"
                                id="sku"
                                name="sku"
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="#name"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                min={1}
                                placeholder="#price"
                                id="price"
                                name="price"
                            />
                        </div>
                        <div>
                            <label htmlFor="Type Switcher">Type Switcher</label>
                            <select
                                name="type"
                                id="productType"
                                className="select"
                                defaultValue={"*"}
                                onChange={onTypeSwitcherChange}
                            >
                                <optgroup>
                                    <option value="*" disabled>Type Switcher</option>
                                    <option value="DVD">DVD-Disc</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Book">Book</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    {
                        subFormId === 'DVD' ? <Dvd /> :
                            subFormId === 'Furniture' ? <Furniture /> :
                                subFormId === 'Book' ? <Book /> : null
                    }
                </div >
            </fieldset>
        </form>
    )
}

export default AddProduct;