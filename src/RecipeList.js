import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({recipes, setRecipes}) {
   const deleteRecipe = (indexToDelete) => setRecipes((currentRecipe) => currentRecipe.filter((recipe, index) => index !== indexToDelete)
    );
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
            />
          ))}  
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
