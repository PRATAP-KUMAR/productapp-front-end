import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const obj = props;
  const { handleSave, handleDelete } = obj;
  const url = window.location.href.split('/')[3];
  const navigate = useNavigate();

  const clearForm = () => {
    const form = document.getElementById("product_form").form;
    if (form) form.reset();
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
        <div>
          {
            url === 'add-product' ?
              <button type='button' onClick={handleSave} className='custom-btn'>Save</button> :
              <Link to="/add-product" onClick={clearForm} className='custom-btn'>ADD</Link>
          }
          {
            url === 'add-product' ?
              <button type="butotn" onClick={onCancel} className='custom-btn'>Cancel</button> :
              <button type="button" onClick={handleDelete} className='custom-btn' id={'delete-product-btn'}>MASS DELETE</button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;