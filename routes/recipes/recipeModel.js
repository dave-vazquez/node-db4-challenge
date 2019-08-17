const db = require('../../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('ingredients as i')
    .leftJoin('recipes_ingredients as ri', 'i.id', 'ri.ingredient_id')
    .where('ri.recipe_id', '=', recipe_id)
    .select('i.name', 'i.qty')
    .orderBy('i.name', 'asc');
}

function getInstructions(recipe_id) {
  return db('steps')
    .where({ recipe_id })
    .select('step_number', 'description')
    .orderBy('step_number', 'asc');
}
