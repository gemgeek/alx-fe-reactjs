import React from 'react';
import { useRecipeStore } from "./recipeStore";
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe, index) => (
          <div key={index}>
            <h3>
              <Link to={`/recipe/${index}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;