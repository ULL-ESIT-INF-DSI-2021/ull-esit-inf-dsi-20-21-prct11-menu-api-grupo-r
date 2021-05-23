import mongoose from 'mongoose';
import {MacroNutrients} from '../models/MacroNutrients';
import {Plate, PlateType} from '../models/Plate';
import {Ingredient, IngredientType} from '../models/Ingredient';


/**
 * Schema of Plate for the mongoose database.
 */
export const PlateSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: PlateType,
    required: true,
  },
  price: {
      type: Number,
      required: true
  },
  ingredients: [{
    type: Ingredient,
    required: true,
  }],
  nutrients: {
    type: MacroNutrients,
    required: true,
  },
  mainIngredientType: {
    type: IngredientType,
    required: true,
  }
});

export const plate = mongoose.model<Plate>('Plate', PlateSchema);