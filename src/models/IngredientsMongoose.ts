import {Document} from 'mongoose';
import {Schema} from 'mongoose';
import {model} from 'mongoose';

export interface IngredientInterface extends Document {
  name: string,
  origin: string,
  group: 'animal' | 'vegetable' | 'dairy' | 'cereal' | 'fruits',
  lipids: number,
  carbohydrates: number,
  proteins: number,
  kcalories: number,
  price: number,
}

export const IngredientSchema = new Schema({
  name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
  },

  origin: {
      type: String,
      required: true,
      trim: true,
  },

  group: {
      type: String,
      required: true,
      trim: true,
      default: 'animal',
      enum: ['animal', 'vegetable', 'dairy', 'cereal' ,'fruits'],
  },

  lipids: {
      type: Number,
      required: true,
  },

  carbohydrates: {
      type: Number,
      required: true,
  },

  proteins: {
      type: Number,
      required: true,
  },

  kcalories: {
      type: Number,
      required: true,
  },

  price: {
      type: Number,
      required: true,
  },
});

export const Ingredient = model<IngredientInterface>('Ingredients', IngredientSchema);