import * as express from 'express';
import {Ingredient, IngredientInterface} from '../modules/IngredientsMongoose';
import {Plate, PlateInterface} from '../modules/PlateMongoose';

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

/**
 * Introducir plato
 */
postRouter.post('/course', async (req, res) => {
  const {name, type, ingredients, nummber} = req.body;
  const ingredientsArray: IngredientInterface[] = []
  let ingredient;

  for (let i = 0; i < ingredients.lenght; i++) {
    const keyword = ingredients[i]? {name: ingredients[i].toString()}: {};
    ingredient = await Ingredient.findOne(keyword);

    if(!(ingredient === null)) {
      ingredientsArray.push(ingredient);
    }
  }

  //setter para grupo predominante, valor nutricional y precio
  /*
  const predominantGroup = setPrediminantGroup(ingredientsArray);
  const nutritionValue = setNutritionValue(ingredientsArray);
  const price = setPrice(arrayIngredients, number);

  const newDish = new Dish({
    'name': name,
    'type': type,
    'ingredients': ingredientsArray;
    'number': number;
    'predominantGroup': predominantGroup,
    'nutritionValue': nutritionValue,
    'price': price
  });

  try {
    await dish.save();
    res.status(201).send(dish);
  } catch (error) {
    res.status(400).send(error);
  }
  */
})

