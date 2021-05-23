import mongoose from 'mongoose';
import {Ingredient, IngredientType} from '../models/Ingredient';
import {MacroNutrients} from '../models/MacroNutrients';


/**
 * Schema of Ingredient for the mongoose database.
 */
export const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number, 
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  ingredientType: {
    type: IngredientType,
    required: true,
  },
  nutrients: {
    type: MacroNutrients,
    required: true,
  },
  amount: {
    type: Number, 
    required: true,
  }
});
  
export const ingredient = mongoose.model<Ingredient>('Ingredient', IngredientSchema);