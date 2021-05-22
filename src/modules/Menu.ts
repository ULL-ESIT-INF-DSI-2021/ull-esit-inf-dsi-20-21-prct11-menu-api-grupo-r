import {Plate} from "./Plate";
import {Ingredient} from "./Ingredient";
import {MacroNutrients} from "./MacroNutrients";


export class Menu {
  public price_: number;
  public plates_: Plate[];
  public ingredients_: Ingredient[];
  public nutritionalValues_: MacroNutrients;


  constructor(newPrice: number, newPlates: Plate[], newIngredients: Ingredient[], newNutritionalValues: MacroNutrients) {
    this.price_ = newPrice;
    this.plates_ = newPlates;
    this.ingredients_ = newIngredients;
    this.nutritionalValues_ = newNutritionalValues;
  }
}