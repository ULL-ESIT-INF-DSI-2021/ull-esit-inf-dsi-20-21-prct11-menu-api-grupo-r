import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';

export const deleteRouter= express.Router();

/**
 * Borrar Ingredientes
 */
deleteRouter.delete('/ingredients', async (req, res) => {
  if(!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  try {
    const ingredient = await Ingredient.findByIdAndDelete({
      name: req.query.name.toString(),
    });

    if (!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/ingrendients/:id', async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);

    if(!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send();
  }
});