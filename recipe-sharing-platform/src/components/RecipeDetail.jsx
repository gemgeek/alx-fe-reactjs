import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id, 10)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;