import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';

export const postRouter = express.Router();

/**
 * Introducir ingrediente
 */
postRouter.post('/ingredients', async (req, res) => {
  const ingredient = new Ingredient(req.body);

  try {
    await ingredient.save();
    res.status(201).send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

