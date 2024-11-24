import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetailsWrapper from "./components/RecipeDetailsWrapper";
import FavoritesList from "./components/FavoritesList"; // Add the FavoritesList component
import RecommendationsList from "./components/RecommendationsList"; // Add the RecommendationsList component

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <SearchBar />

        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> |<Link to="/favorites">My Favorites</Link> |
          <Link to="/recommendations">Recommended for You</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetailsWrapper />} />
          <Route path="/favorites" element={<FavoritesList />} />{" "}
          {/* Add Favorites route */}
          <Route
            path="/recommendations"
            element={<RecommendationsList />}
          />{" "}
          {/* Add Recommendations route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
