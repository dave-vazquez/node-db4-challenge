const express = require('express');
const Recipes = require('./recipeModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json({
      recipes
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error: Could not get recipes.',
      err
    });
  }
});

module.exports = router;
