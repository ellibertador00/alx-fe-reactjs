import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useRecipeStore } from "../recipeStore"; // Assuming your Zustand store is in the parent directory

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes from the store

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Use Link to navigate to the RecipeDetails page for each recipe */}
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
