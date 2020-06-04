exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'recipe_1', description: 'recipe_1_description' },
    { name: 'recipe_2', description: 'recipe_2_description' },
    { name: 'recipe_3', description: 'recipe_3_description' },
    { name: 'recipe_4', description: 'recipe_4_description' }
  ]);
};
