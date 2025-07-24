import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  setRecommendations: (recommendations) => set({ recommendations }),
}));

export default useRecipeStore;