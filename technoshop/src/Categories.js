import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Form component for adding/editing a category
function CategoryForm({ handleAddCategory, handleEditCategory, editCategoryData }) {
  const [formData, setFormData] = useState({
    title: '',
    isActive: ''
  });

  useEffect(() => {
    if (editCategoryData) {
      setFormData(editCategoryData);
    }
  }, [editCategoryData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.isActive) return;

    if (editCategoryData) {
      handleEditCategory(formData);
    } else {
      handleAddCategory(formData);
    }

    setFormData({
      title: '',
      isActive: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="title" className="form-label">Enter Category title</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="form-input" />

      <label htmlFor="isActive" className="form-label">Is Active</label>
      <select id="isActive" name="isActive" value={formData.isActive} onChange={handleChange} className="form-input">
        <option value="">Select option</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <button type="submit" className="submit">
        {editCategoryData ? 'Update Category' : 'Add Category'}
      </button>
    </form>
  );
}

// List component for displaying categories
function CategoryList({ categoryList, deleteCategory, editCategoryForm }) {
  return (
    <div className="category-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          
            <th>Created At</th>
            <th>Updated At</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.title}</td>
                    <td>{new Date(category.createdAt).toLocaleString()}</td>
              <td>{new Date(category.updatedAt).toLocaleString()}</td>
              <td>{category.personCreated?.firstName} {category.personCreated?.lastName}</td>
              <td>{category.personUpdated?.firstName} {category.personUpdated?.lastName}</td>

              <td>
              <td>
                {category.isActive === true? (
                  <button className="deactivate" onClick={() => deleteCategory(category.id)}>
                    Deactivate
                  </button>
                    ) : (
                  <button className="activate" onClick={() => deleteCategory(category.id)}>
                    Activate
                  </button>
                    )}
                    <button className="edit" onClick={() => editCategoryForm(category.id)}>Edit</button>
                  </td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Categories() {
  const [categories, setCategories] = useState([]);
  const [editCategoryData, setEditCategoryData] = useState(null);

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCategory = async (categoryData) => {
    try {
      const response = await axios.post('https://localhost:44378/api/category', categoryData);
      setCategories([...categories, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.put(`https://localhost:44378/api/category/delete/${id}`);
      fetchCategoriesData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const editCategory = async (categoryData) => {
    try {
      await axios.put(`https://localhost:44378/api/category/update/${categoryData.id}`, categoryData);
      const updatedList = categories.map((category) =>
        category.id === categoryData.id ? categoryData : category
      );
      setCategories(updatedList);
      setEditCategoryData(null);
    } catch (error) {
      console.error(error);
    }
  };

  const editCategoryForm = async (id) => {
    try {
      const response = await axios.get(`https://localhost:44378/api/category/${id}`);
      const formCategoryDataToEdit = response.data;
  
      // Set the initial state for isActive to ensure it is defined
      formCategoryDataToEdit.isActive = formCategoryDataToEdit.isActive.toString();
  
      setEditCategoryData(formCategoryDataToEdit);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <CategoryForm
        handleAddCategory={addCategory}
        handleEditCategory={editCategory}
        editCategoryData={editCategoryData}
      />
      <CategoryList
        categoryList={categories}
        deleteCategory={deleteCategory}
        editCategoryForm={editCategoryForm}
      />
    </div>
  );
}

export default Categories;
