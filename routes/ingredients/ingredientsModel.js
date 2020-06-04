const db = require('../../data/db-config');

module.exports = {
  getRecipesByIngredient
};

function getRecipesByIngredient(ingredient_id) {
  return db('recipes as r')
    .leftJoin('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
    .where('ri.ingredient_id', ingredient_id)
    .select('r.name', 'r.description', 'ri.ingredient_id')
    .orderBy('r.name', 'asc');
}
