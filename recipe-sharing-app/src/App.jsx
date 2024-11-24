import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { useParams } from "react-router-dom";

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={parseInt(recipeId)} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the home page with RecipeList and AddRecipeForm */}
        <Route
          path="/"
          element={
            <>
              <RecipeList />
              <AddRecipeForm />
            </>
          }
        />
        {/* Route for detailed view of a single recipe */}
        <Route path="/recipes/:recipeId" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
