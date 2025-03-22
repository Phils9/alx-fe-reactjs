import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-8">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{recipe.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={new URL(`../assets/${recipe.image}`, import.meta.url).href}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700 mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;