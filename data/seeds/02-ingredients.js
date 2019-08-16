exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'ingredient_1', qty: 1 },
    { name: 'ingredient_2', qty: 2 },
    { name: 'ingredient_3', qty: 1 },
    { name: 'ingredient_4', qty: 3 },
    { name: 'ingredient_5', qty: 1 },
    { name: 'ingredient_6', qty: 2 },
    { name: 'ingredient_7', qty: 1 },
    { name: 'ingredient_8', qty: 3 },
    { name: 'ingredient_9', qty: 1 },
    { name: 'ingredient_10', qty: 1 }
  ]);
};
