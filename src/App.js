import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListProducts from './components/ListProducts';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import apiUrl from './apiUrl';
import errorEliminator from './errorEliminator';
import errorIndicator from './errorIndicator';

function App() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({});
  const [action, setAction] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${apiUrl}/get-products`
    const getProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data.products);
    }
    getProducts();
  }, [action]);

  const handleDelete = (e) => {
    e.preventDefault();
    let toDelete = document.querySelectorAll('.delete-checkbox:checked');
    if (toDelete.length) {
      let toDeleteItems = [];
      toDelete.forEach((chkbox) => {
        toDeleteItems.push(chkbox.id);
      })
      const postUrl = `${apiUrl}/del-products`
      axios.post(postUrl, { array: toDeleteItems }, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
      setAction(x => !x);
    }
  }

  const handleSave = () => {
    if (!Object.keys(inputs).includes('type')) {
      errorIndicator("Please choose Type Switcher and fill the details");
      return;
    }
    const type = inputs.type;
    if (type === 'DVD' || type === 'Book') {
      if (Object.keys(inputs).length < 5) {
        errorIndicator("Please add all fields and then save");
        return;
      }
    } else {
      if (Object.keys(inputs).length < 7) {
        errorIndicator("Please add all fields and then save");
        return;
      }
    }

    const uniqueSKU = [];
    if (products) {
      products.forEach((product) => {
        uniqueSKU.push(product.sku.toLowerCase())
      });

      if (uniqueSKU.includes(inputs.sku.toLowerCase())) {
        errorIndicator(`This SKU -> ${inputs.sku} is already in Database, Please enter unique SKU`);
        return;
      }
    }

    errorEliminator();
    const postUrl = `${apiUrl}/add-product`
    axios.post(postUrl, inputs, {
      headers: {
        "Content-Type": "text/plain"
      }
    });
    console.log(inputs);
    setInputs({});
    navigate('/');
    setAction(x => !x);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  return (
    <>
      <Header handleSave={handleSave} handleDelete={handleDelete} />
      <Routes>
        <Route path="/" element={<ListProducts products={products} />} />
        <Route path="/add-product" element={<AddProduct handleChange={handleChange} />} />
      </Routes>
    </>
  );
}

export default App;
