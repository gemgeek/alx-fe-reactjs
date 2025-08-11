import { useParams, Link } from 'react-router-dom';
import recipes from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id.toString() === id);

  if (!recipe) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to recipes
      </Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="mb-6 text-gray-700">{recipe.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}