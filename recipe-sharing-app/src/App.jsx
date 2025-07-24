import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const Home = () => (
  <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
    <h1>🍲 Recipe Sharing App</h1>
    <AddRecipeForm />
    <hr />
    <RecipeList />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
