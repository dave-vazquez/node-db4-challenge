const express = require('express');
const Recipes = require('./recipeModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json({
      success: true,
      recipes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error: Could not get recipes.',
      error
    });
  }
});

router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json({
      success: true,
      shoppingList
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error: Could not get shopping list.',
      error
    });
  }
});

router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params;

  try {
    const steps = await Recipes.getInstructions(id);
    res.status(200).json({
      success: true,
      steps
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error: Could not get steps.',
      error
    });
  }
});

module.exports = router;
