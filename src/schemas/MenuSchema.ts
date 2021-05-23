import mongoose from "mongoose";
import {Menu} from "../models/Menu";
import {Plate} from "../models/Plate";
import {Ingredient} from "../models/Ingredient";
import {MacroNutrients} from "../models/MacroNutrients";

/**
 * Schema of Menu for the mongoose database.
 */
export const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  plates: [{
    type: Plate,
    required: true,
  }],
  mainIngredient: {
    type: Ingredient,
    required: true,
  },
  nutritionalValues: {
    type: MacroNutrients,
    required: true,
  }
});

export const menu = mongoose.model<Menu>("Menu", MenuSchema);