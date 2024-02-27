import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../apiUrl';
import errorIndicator from '../errorIndicator';
import errorEliminator from '../errorEliminator';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/products/productsReducer';

const Header = () => {

  const [posted, setPosted] = useState(false);

  const url = window.location.href.split('/')[3];
  const navigate = useNavigate();

  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch, products, posted]);

  const handleSave = () => {
    errorEliminator();
    const form = document.getElementById('product_form');
    let formData = new FormData(form);

    let inputs = {}
    for (const [key, value] of formData) {
      inputs[key] = value;
    }

    if (!Object.keys(inputs).includes('type')) {
      errorIndicator("Please choose Type Switcher and fill the details");
      return;
    }

    for (const value of Object.values(inputs)) {
      if (!value) return errorIndicator("Please fill all fields");
    }

    let skus = []
    products.forEach(product => {
      for (const [key, value] of Object.entries(product)) {
        if (key === "sku")
          skus.push(value);
      }
    })

    if (skus.includes(inputs["sku"])) return errorIndicator(`${inputs["sku"]} exists, change the SKU`);

    const postUrl = `${apiUrl}/add-product`
    axios.post(postUrl, inputs, {
      headers: {
        "Content-Type": "text/plain"
      }
    });
    navigate('/');
  }

  const handleDelete = () => {
    errorEliminator();
    let toDelete = document.querySelectorAll('.delete-checkbox:checked');
    if (toDelete.length) {
      let toDeleteItems = [];
      toDelete.forEach((chkbox) => {
        toDeleteItems.push(chkbox.id);
      });

      const postUrl = `${apiUrl}/del-products`;
      axios.post(postUrl, { array: toDeleteItems }, {
        headers: {
          "Content-Type": "text/plain"
        }
      }).then(() => {
        setPosted(true);
      });
    } else {
      const newDiv = document.createElement("div");
      newDiv.setAttribute('id', 'errormsg');
      newDiv.setAttribute('class', 'errormsg');
      const newContent = document.createTextNode("No product/products are selected");
      newDiv.appendChild(newContent);
      document.body.insertAdjacentElement('beforeend', newDiv);
    }
  }

  const onCancel = () => {
    let check = document.getElementById('errormsg');
    if (check) check.remove();
    navigate('/');
  }

  return (
    <header>
      <nav>
        <h2>
          {url === 'add-product' ? 'Add Product' : 'Product List'}
        </h2>
        {
          url === 'add-product' ? (
            <div>
              <button type='button' onClick={handleSave} className='custom-btn'>Save</button>
              <button type="butotn" onClick={onCancel} className='custom-btn'>Cancel</button>
            </div>
          ) :
            (
              <div>
                <Link to="/add-product" className='custom-btn'>ADD</Link>
                <button type="button" onClick={handleDelete} className='custom-btn' id={'delete-product-btn'}>MASS DELETE</button>
              </div>
            )
        }

      </nav>
    </header>
  )
}

export default Header;