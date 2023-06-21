import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function ProductForm({ handleAddProduct, categoriesList }) {
  const [name, setProductName] = useState('');
  const [price, setProductPrice] = useState('');
  const [categoryTitle, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isActive, setIsActive] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !categoryTitle || !quantity || !isActive) return;

    const formData = {
      name,
      price,
      categoryTitle,
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
        value={name}
        onChange={(e) => setProductName(e.target.value)}
      />

      <label>Enter Product Price</label>
      <input
        type="text"
        className="input"
        value={price}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <label>Enter Category</label>
      <select
        className="select"
        value={categoryTitle}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoriesList.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>

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
              <td>{formData.name}</td>
              <td>{formData.price}</td>
              <td>{formData.categoryTitle}</td>
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
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchProductData();
    fetchCategoriesData();
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
      // Do something with the edit form data
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/categories');
      setCategoriesList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <h2>Enter Product Details</h2>
      <ProductForm handleAddProduct={addForm} categoriesList={categoriesList} />
      <h3>Product List</h3>
      <ProductList formDataList={formDataList} deleteForm={deleteForm} editForm={editForm} />
    </div>
  );
}

export default App;
