exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, description: 'step_1', recipe_id: 1 },
    { step_number: 2, description: 'step_2', recipe_id: 1 },
    { step_number: 3, description: 'step_3', recipe_id: 1 },
    { step_number: 1, description: 'step_1', recipe_id: 2 },
    { step_number: 2, description: 'step_2', recipe_id: 2 },
    { step_number: 3, description: 'step_3', recipe_id: 2 },
    { step_number: 4, description: 'step_4', recipe_id: 2 },
    { step_number: 1, description: 'step_1', recipe_id: 3 },
    { step_number: 2, description: 'step_2', recipe_id: 3 },
    { step_number: 1, description: 'step_1', recipe_id: 4 },
    { step_number: 2, description: 'step_2', recipe_id: 4 },
    { step_number: 3, description: 'step_3', recipe_id: 4 }
  ]);
};
