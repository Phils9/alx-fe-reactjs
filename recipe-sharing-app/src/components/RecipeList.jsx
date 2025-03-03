import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; // Ensure this import is correct

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Use filteredRecipes if available, otherwise use recipes
  const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
