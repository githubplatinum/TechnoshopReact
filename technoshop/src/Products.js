import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ handleAddProduct, categoriesList, editProductData, handleEditProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categoryId: '',
    quantity: '',
    isActive: ''
  });

  useEffect(() => {
    if (editProductData) {
      setFormData(editProductData);
    }
  }, [editProductData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.categoryId || !formData.quantity || !formData.isActive)
      return;

    if (editProductData) {
      handleEditProduct(formData);
    } else {
      handleAddProduct(formData);
    }

    setFormData({
      name: '',
      price: '',
      categoryId: '',
      quantity: '',
      isActive: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="name" className="form-label">Enter Product Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" />

      <label htmlFor="price" className="form-label">Enter Product Price</label>
      <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="form-input" />

      <label htmlFor="categoryId" className="form-label">Select Category</label>
      <select id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange} className="form-input">
        <option value="">Select option</option>
        {categoriesList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>

      <label htmlFor="quantity" className="form-label">Enter Quantity</label>
      <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="form-input" />

      <label htmlFor="isActive" className="form-label">Is Active</label>
      <select id="isActive" name="isActive" value={formData.isActive} onChange={handleChange} className="form-input">
        <option value="">Select an option</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <button type="submit" className="submit">
        {editProductData ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
}

// List component for displaying products
function ProductList({ productList, deleteProduct, editProductForm }) {

  const handleActivateDeactivate = (product) => {
    const updatedProduct = { ...product };
    updatedProduct.isActive = !updatedProduct.isActive;
    deleteProduct(updatedProduct);
  };
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
         
            <th>Date Created</th>
            <th>Date Updated</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.categoryTitle}</td>
              <td>{product.quantity}</td>
          
              <td>{new Date(product.createdAt).toLocaleString()}</td>
              <td>{new Date(product.updatedAt).toLocaleString()}</td>
              <td>{product.personCreated.firstName} {product.personCreated.lastName}</td>
              <td>{product.personUpdated.firstName} {product.personUpdated.lastName}</td>
              
              <td>
                    {product.isActive ? (
                      <button className="deactivate" onClick={() => deleteProduct(product.id)}>
                        Deactivate
                      </button>
                    ) : (
                      <button className="activate" onClick={() => deleteProduct(product.id)}>
                        Activate
                      </button>
                    )}
                    </td>
                    <td>
                    <button className="edit" onClick={() => editProductForm(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [editProductData, setEditProductData] = useState(null);

  useEffect(() => {
    fetchProductData();
    fetchCategoriesData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/products');
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (productData) => {
    try {
      const response = await axios.post('https://localhost:44378/api/product', productData);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.put(`https://localhost:44378/api/product/delete/${id}`);
      fetchProductData();
      } catch (error) {
      console.error(error);
    }
  };

  const editProduct = async (updatedProductData) => {
    try {
      await axios.put(`https://localhost:44378/api/product/update/${updatedProductData.id}`, updatedProductData);
      const updatedProducts = products.map((product) =>
        product.id === updatedProductData.id ? updatedProductData : product
      );
      setProducts(updatedProducts);
      setEditProductData(null);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/categories');
      if (Array.isArray(response.data)) {
        setCategoriesList(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <ProductForm
        handleAddProduct={addProduct}
        categoriesList={categoriesList}
        editProductData={editProductData}
        handleEditProduct={editProduct}
      />
      <ProductList
        productList={products}
        deleteProduct={deleteProduct}
        editProductForm={setEditProductData}
      />
    </div>
  );
}

export default Products;
