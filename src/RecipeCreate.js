import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes}) {
  const recipeObject = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({ ...recipeObject});
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, {...formData}]);
    setFormData({...recipeObject});
  };

  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                required={true}
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                required={true}
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
