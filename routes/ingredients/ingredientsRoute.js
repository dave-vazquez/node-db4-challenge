const express = require('express');
const Ingredients = require('./ingredientsModel');

const router = express.Router();

router.get('/:id/recipes', async (req, res) => {
  const { id } = req.params;

  try {
    const recipes = await Ingredients.getRecipesByIngredient(id);

    if (recipes.length > 0) {
      res.status(200).json({
        success: true,
        recipes
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Could not find any recipes by that ingredient id'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error: Could not get recipes.',
      error
    });
  }
});

module.exports = router;
