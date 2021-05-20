import {FoodGroup} from "./Enums";
import {Ingredient} from "./Ingredient";
import {MacroNutrients} from "./MacroNutrients";



export class Plate {
  private name_: string;
  private price_: number;
  private ingredients_: Ingredient[];
  private nutritionalValues_: MacroNutrients;
  private predominantFoodGroup_: FoodGroup;

  /**
   * Stores all the values.
   * @param newName Name of the plate.
   * @param newIngredients Ingredients of the plate.
   * @param newPredominantFoodGroup Predominant food group of the plate.
   */
  constructor(newName: string, newIngredients: Ingredient[], newPredominantFoodGroup: FoodGroup) {
    this.name_ = newName;
    this.price_ = 0;
    this.ingredients_ = newIngredients;
    this.predominantFoodGroup_ = newPredominantFoodGroup;
    this.nutritionalValues_ = new MacroNutrients(0, 0, 0);
    newIngredients.forEach((ingredient) => {
      this.price_ += ingredient.getPrice();
      this.nutritionalValues_.carbohydrates += ingredient.getNutritionalValues().carbohydrates;
      this.nutritionalValues_.proteins += ingredient.getNutritionalValues().proteins;
      this.nutritionalValues_.lipids += ingredient.getNutritionalValues().lipids;
    });
  }
}