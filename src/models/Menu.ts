import {Plate} from "./Plate";
import {Ingredient} from "./Ingredient";
import {MacroNutrients} from "./MacroNutrients";


export class Menu {
  public name_: string;
  public price_: number;
  public plates_: Plate[];
  public mainIngredient_: Ingredient;
  public nutritionalValues_: MacroNutrients;


  constructor(newName: string, newPrice: number, newPlates: Plate[], newIngredients: Ingredient, newNutritionalValues: MacroNutrients) {
    this.name_ = newName;
    this.price_ = newPrice;
    this.plates_ = newPlates;
    this.mainIngredient_ = newIngredients;
    this.nutritionalValues_ = newNutritionalValues;
  }
}
