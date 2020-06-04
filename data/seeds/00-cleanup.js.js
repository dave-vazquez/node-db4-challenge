exports.seed = async function(knex) {
  try {
    await knex.truncate('steps');
    await knex.truncate('recipes_ingredients');
    await knex.truncate('ingredients');
    await knex.truncate('recipes');
  } catch (err) {
    console.log(err);
  }
};
