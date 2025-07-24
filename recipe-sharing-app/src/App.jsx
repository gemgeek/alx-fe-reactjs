import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const Home = () => (
  <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
    <h1>🍲 Recipe Sharing App</h1>
    <AddRecipeForm />
    <hr />
    <RecipeList />
    <hr />
    <FavoritesList />
    <hr />
    <RecommendationsList />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
