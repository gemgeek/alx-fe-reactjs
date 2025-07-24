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
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
