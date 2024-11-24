import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "", // Store for the search term
  filteredRecipes: [], // Store for filtered recipes based on search

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
}));
