import { useState, useEffect } from 'react';
import { ChefHat, Clock, Users, RefreshCw } from 'lucide-react';

interface Recipe {
  name: string;
  ingredients: string[];
  steps: string[];
  prepTime: string;
  servings: string;
}

const recipes: Recipe[] = [
  {
    name: "Garlic Butter Pasta",
    ingredients: ["Pasta", "Butter", "Garlic", "Parmesan cheese"],
    steps: [
      "Cook pasta according to package directions",
      "Melt butter in a pan and sauté minced garlic until fragrant",
      "Toss cooked pasta with garlic butter",
      "Top with grated Parmesan and serve"
    ],
    prepTime: "15 min",
    servings: "2-3"
  },
  {
    name: "Honey Mustard Chicken",
    ingredients: ["Chicken breast", "Honey", "Dijon mustard", "Olive oil"],
    steps: [
      "Mix honey, mustard, and olive oil in a bowl",
      "Season chicken with salt and pepper",
      "Pan-fry chicken until golden on both sides",
      "Brush with honey mustard glaze and serve"
    ],
    prepTime: "20 min",
    servings: "2"
  },
  {
    name: "Caprese Salad",
    ingredients: ["Fresh mozzarella", "Tomatoes", "Fresh basil", "Balsamic glaze", "Olive oil"],
    steps: [
      "Slice tomatoes and mozzarella into rounds",
      "Arrange alternating slices on a plate",
      "Tuck fresh basil leaves between slices",
      "Drizzle with olive oil and balsamic glaze"
    ],
    prepTime: "10 min",
    servings: "2"
  },
  {
    name: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Lemon", "Salt"],
    steps: [
      "Toast bread until golden and crispy",
      "Mash avocado with a squeeze of lemon juice and salt",
      "Spread avocado mixture generously on toast",
      "Add pepper or red pepper flakes if desired"
    ],
    prepTime: "5 min",
    servings: "1"
  },
  {
    name: "Banana Pancakes",
    ingredients: ["Bananas", "Eggs", "Cinnamon"],
    steps: [
      "Mash 2 ripe bananas in a bowl",
      "Beat in 2 eggs and a pinch of cinnamon",
      "Heat a non-stick pan over medium heat",
      "Pour small circles of batter and cook until bubbles form, then flip"
    ],
    prepTime: "10 min",
    servings: "2"
  }
];

function App() {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomRecipe = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setCurrentRecipe(recipes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  if (!currentRecipe) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ChefHat className="w-10 h-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-800">Quick & Easy Recipes</h1>
          </div>
          <p className="text-gray-600">Simple recipes with just 3-5 ingredients</p>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{currentRecipe.name}</h2>
            <button
              onClick={getRandomRecipe}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              New Recipe
            </button>
          </div>

          <div className="flex gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span>{currentRecipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span>{currentRecipe.servings} servings</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
            <ul className="space-y-2">
              {currentRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
            <ol className="space-y-4">
              {currentRecipe.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Perfect for busy weeknights and cooking beginners!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
