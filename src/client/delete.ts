import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';
import {Plate} from '../modules/PlateMongoose';

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

/**
 * Borrar plato
 */
 deleteRouter.delete('/courses', async (req, res) => {
  if(!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  try {
    const plate = await Plate.findByIdAndDelete({
      name: req.query.name.toString(),
    });

    if (!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/courses/:id', async (req, res) => {
  try {
    const plate = await Plate.findByIdAndDelete(req.params.id);

    if(!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Borrar Menu
 */
 /*
 deleteRouter.delete('/menus', async (req, res) => {
  if(!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  try {
    const menu = await Menu.findByIdAndDelete({
      name: req.query.name.toString(),
    });

    if (!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/menus/:id', async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);

    if(!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(400).send();
  }
});*/