import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "", // Store for the search term
  filteredRecipes: [], // Store for filtered recipes based on search
  favorites: [], // Store for the user's favorite recipes
  recommendations: [], // Store for recommendations

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      // Automatically filter new recipes based on the current search term
      const filteredRecipes = updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      // Re-filter recipes after an update
      const filteredRecipes = updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      // Re-filter recipes after deletion
      const filteredRecipes = updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Update the search term and filter recipes accordingly
  setSearchTerm: (term) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes };
    }),

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on user's favorites
  generateRecommendations: () =>
    set((state) => {
      const recommendations = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      return { recommendations };
    }),
}));
