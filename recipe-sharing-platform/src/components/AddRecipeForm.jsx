import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle form submission (e.g., add recipe to data.json or send to an API)
    console.log('Recipe Submitted:', { title, ingredients, instructions });

    // Clear form fields and errors
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="6"
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;