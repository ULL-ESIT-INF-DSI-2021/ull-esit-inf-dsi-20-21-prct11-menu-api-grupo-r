import {Document, Schema, model} from 'mongoose';
import {IngredientInterface} from './IngredientsMongoose';

export interface PlateInterface extends Document {
  name: string,
  type: 'starter' | 'first' | 'second' | 'dessert',
  ingredients: IngredientInterface[],
  quantity: number[],
  predominantGroup: 'animal' | 'vegetable' | 'dairy' | 'cereal' | 'fruits',
  nutritionalValue: number,
  price: number,
}

export const PlateSchema = new Schema({
  name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
  },

  type: {
      type: String,
      trim: true,
      default: 'starter',
      required: true,
      enum: ['starter', 'first', 'second', 'dessert'],
  },

  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
      unique: true,
      required: true,
    }
  ],

  quantity: [
    {
      type: Number,
      required: true,
    }
  ],
  predominantGroup: {
    type: String,
    trim: true,
    required: false,
    default: 'animal',
    enum: ['animal', 'vegetable', 'dairy', 'cereal' ,'fruits'],
  },

  nutritionalValue: {
    type: Number,
    required: false,
  },

  price: {
      type: Number,
      required: false,
  },
});

export const Plate = model<PlateInterface>('Plate', PlateSchema);