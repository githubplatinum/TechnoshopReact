
/*
function ProductForm({ handleAddProduct, categoriesList }) {
  const [name, setProductName] = useState('');
  const [price, setProductPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(''); 
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !categoryId || !quantity || !isActive) return;

    const formProductData = {
      name,
      price,
      categoryId, 
      quantity,
      isActive
    };

    handleAddProduct(formProductData);

    setProductName('');
    setProductPrice('');
    setCategoryId('');
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
        type="number"
        className="input"
        value={price}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <label>Select Category</label>
      <select
        className="select"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)} 
      > <option value="">Select option</option>
        {categoriesList.map((category) => (
          
          <option key={category.id} value={category.id}>
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

      <label>Is Active</label>
      <select
        type="text"
        className="input"
        value={isActive}
        onChange={(e) => setIsActive(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}


function ProductList({ formProductDataList, deleteProductForm, editProductForm }) {


   
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
            <th>Date created</th>
            <th>Date updated</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formProductDataList.map((formProductData, index) => (
            <tr key={formProductData.Id}>
              <td>{index + 1}</td>
              <td>{formProductData.name}</td>
              <td>{formProductData.productPrice}</td>
              <td>{formProductData.categoryTitle}</td>
              <td>{formProductData.quantity}</td>
              <td>{formProductData.isActive ? 'Yes' : 'No'}</td>
              <td>{new Date(formProductData.updatedAt).toLocaleString()}</td>
              <td>{new Date(formProductData.createdAt).toLocaleString()}</td>
              <td>{formProductData.personCreated.firstName} {formProductData.personCreated.lastName}</td>
              <td>{formProductData.personUpdated.firstName} {formProductData.personUpdated.lastName}</td>
              
              <td>
                <button className="btn-action" onClick={() => deleteProductForm(formProductData.Id)}>
                  Delete
                </button>
                <button className="btn-action" onClick={() => editProductForm(formProductData.Id)}>
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

function CategoryForm({hadnleAddCategory}){
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !isActive) return;
  
      const formCategoryData = {
        title,
        isActive
      };
     hadnleAddCategory(formCategoryData);
     setTitle('');
     setIsActive('');   
  
};

return(
  <form onSubmit={handleSubmit} className="form-container">
      <label>Enter Category title</label>
      <input 
      type="text"
      value={title}
      oncChange={(e) => setTitle(e.target.value)}
      />
  <label>Is Active</label>
  <select
    type="text"
    value={isActive}
    onChange={(e) => setIsActive(e.target.value)} 
    >
      <option value="">Select option</option>
      <option value ="true">Yes</option>
      <option value="false">No</option>
    </select>
    <button type="submit" className="submit">Submit</button>

  </form>

);
}

function CategoryList({formCategoriesDataList, deleteCategoriesForm, editCategoriesFrom }) {
  return (
    <div className="form-data-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Is Active</th>
            <th>Date created</th>
            <th>Date updated</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formCategoryDataList.map((formCategoryData, index) => (
            <tr key={formCategoryData.Id}>
              <td>{index + 1}</td>
              <td>{formCategoryData.name}</td>
              <td>{formCategoryData.CategoryPrice}</td>
              <td>{formCategoryData.categoryTitle}</td>
              <td>{formCategoryData.quantity}</td>
              <td>{formCategoryData.isActive ? 'Yes' : 'No'}</td>
              <td>{new Date(formCategoryData.updatedAt).toLocaleString()}</td>
              <td>{new Date(formCategoryData.createdAt).toLocaleString()}</td>
              <td>{formCategoryData.personCreated.firstName} {formCategoryData.personCreated.lastName}</td>
              <td>{formCategoryData.personUpdated.firstName} {formCategoryData.personUpdated.lastName}</td>
              
              <td>
                <button className="btn-action" onClick={() => deleteCategoryForm(formCategoryData.Id)}>
                  Delete
                </button>
                <button className="btn-action" onClick={() => editCategoryForm(formCategoryData.Id)}>
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
  const [formProductDataList, setFormProductDataList] = useState([]);
  const [formCategoriesDataList, setFormCategoriesDataList] = useState([]);

  useEffect(() => {
    fetchProductData();
    fetchCategoriesData();
  }, []);

  useEffect(() => {
    console.log(formProductDataList);
  }, [formProductDataList]);

  useEffect(() => {
    console.log(formCategoriesDataList);
  },[formCategoriesDataList]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://localhost:44378/api/products');
      if (Array.isArray(response.data)) {
        setFormProductDataList(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProductForm = async (formProductData) => {
    try {
      const response = await axios.post('https://localhost:44378/api/product', formProductData);
      setformProductDataList([...formProductDataList, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  

  const deleteProductForm = async (Id) => {
    try {
      await axios.delete(`https://localhost:44378/api/products/${Id}`);
      const updatedList = formProductDataList.filter((formProductData) => formProductData.Id !== Id);
      setformProductDataList(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const editProductForm = async (Id) => {
    try {
      const response = await axios.get(`https://localhost:44378/api/products/${Id}`);
      const formProductDataToEdit = response.data;
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

  const addCategoryProductForm = async (formCategoryData) => {
    try {
      const response = await axios.post('https://localhost:44378/api/category', formCategoryData);
      setFormCategoriesDataList([...formCategoriesDataList, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategoryForm = async (Id) => {
   try {
    await axios.delete(`https://localhost:44378/api/category/${Id}`);
      const updatedList = fromCategoryDataList.filter((formCategoryData) => formCategoryData.Id !== Id);
      setFormCategoriesDataList(updatedList);
  } catch (error) {
    console.error(error);
    }
    };
  

    const editCategoryForm = async  (Id) => {
      try {
        const response = await axios.get(`https://localhost:44378/api/category/${Id}`);
        const formCategoryDataListToEdit = response.data;
      } catch (error) {
        console.error(error);
      }
     }; */
