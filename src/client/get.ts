import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';
import {Plate} from '../modules/PlateMongoose';

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

/**
 * Obtener plato
 */
 getRouter.get('/course', async (req, res) => {
  const keyword = req.query.name?{name: req.query.name.toString()}: {};

  try {
    const plates = await Plate.find(keyword);

    if (plates.length !== 0) {
      return res.send(plates);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/courses/:id', async (req, res) => {
  try {
    const plates = await Plate.findById(req.params.id);

    if(!plates) {
      return res.status(404).send();
    }
    return res.send(plates);
  } catch(error) {
    return res.status(500).send();
  }
});

/**
 * Obtener menu
 */
 /*getRouter.get('/menus', async (req, res) => {
  const keyword = req.query.name?{name: req.query.name.toString()}: {};

  try {
    const menu = await Menu.find(keyword);

    if (menu.length !== 0) {
      return res.send(menu);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/menus/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if(!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch(error) {
    return res.status(500).send();
  }
});*/
