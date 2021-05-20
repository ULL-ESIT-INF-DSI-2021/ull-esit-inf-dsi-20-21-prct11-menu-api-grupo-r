import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';

export const getRouter = express.Router();

/**
 * Obtener Ingrediente
 */
getRouter.get('/ingredients', async (req, res) => {
  const keyword = req.query.name?{name: req.query.name.toString()}: {};

  try {
    const ingredients = await Ingredient.find(keyword);

    if (ingredients.length !== 0) {
      return res.send(ingredients);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/ingredients/:id', async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);

    if(!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch(error) {
    return res.status(500).send();
  }
});

