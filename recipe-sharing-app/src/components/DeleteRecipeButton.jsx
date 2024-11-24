

import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Delete the recipe from the store
    deleteRecipe(recipeId);

    // Navigate back to the recipe list
    navigate("/");
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", marginTop: "10px" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
