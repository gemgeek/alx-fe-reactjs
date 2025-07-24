import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  addRecipe: (recipe) => set((state) => {
    const newRecipes = [...state.recipes, recipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return {
      searchTerm: term,
      filteredRecipes: filtered
    };
  }),
}));