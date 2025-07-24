import React from 'react';
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
    />
  );
};

export default SearchBar;