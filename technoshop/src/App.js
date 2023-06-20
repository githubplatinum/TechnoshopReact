import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function ProductForm({ handleAddProduct }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isActive, setIsActive] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !productPrice || !category || !quantity || !isActive) return;

    const formData = {
      productName,
      productPrice,
      category,
      quantity,
      isActive
    };

    handleAddProduct(formData);

    setProductName('');
    setProductPrice('');
    setCategory('');
    setQuantity('');
    setIsActive('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Enter Product Name</label>
      <input
        type="text"
        className="input"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <label>Enter Product Price</label>
      <input
        type="text"
        className="input"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <label>Enter Category</label>
      <input
        type="text"
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Enter Quantity</label>
      <input
        type="text"
        className="input"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label>IsActive</label>
      <input
        type="text"
        className="input"
        value={isActive}
        onChange={(e) => setIsActive(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

function ProductList({ formDataList, deleteForm, editForm }) {
  return (
    <div className="form-data-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>IsActive</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={formData.Id}>
              <td>{index + 1}</td>
              <td>{formData.productName}</td>
              <td>{formData.productPrice}</td>
              <td>{formData.category}</td>
              <td>{formData.quantity}</td>
              <td>{formData.isActive}</td>
              <td>
                <button className="btn-action" onClick={() => deleteForm(formData.Id)}>
                  Delete
                </button>
                <button className="btn-action" onClick={() => editForm(formData.Id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [formDataList, setFormDataList] = useState([]);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/products');
      setFormDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addForm = async (formData) => {
    try {
      const response = await axios.post('https://localhost:44378/api/products', formData);
      setFormDataList([...formDataList, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteForm = async (Id) => {
    try {
      await axios.delete(`https://localhost:44378/api/products/${Id}`);
      const updatedList = formDataList.filter((formData) => formData.Id !== Id);
      setFormDataList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const editForm = async (Id) => {
    try {
      const response = await axios.get(`https://localhost:44378/api/products/${Id}`);
      const formDataToEdit = response.data;
      setEditFormData(formDataToEdit);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <h2>Enter Product Details</h2>
      <ProductForm handleAddProduct={addForm} />
      <h3>Product List</h3>
      <ProductList formDataList={formDataList} deleteForm={deleteForm} editForm={editForm} />
    </div>
  );
}

export default App;
