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


  /** SETTERS **/

  /**
   * Sets a new value for the name.
   * @param newName Contains the name of the ingredient.
   */
  public set name(newName: string) {
    this.name_ = newName;
  }
  
  /**
   * Sets a new value for the ingredients.
   * @param newIngredients Contains the ingredients of the ingredient.
   */
   public set ingredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
  }
  
  /**
   * Sets a new value for the predominantFoodGroup.
   * @param newPredominantFoodGroup Contains the predominantFoodGroup of the ingredient.
   */
   public set predominantFoodGroup(newPredominantFoodGroup: FoodGroup) {
    this.predominantFoodGroup_ = newPredominantFoodGroup;
  }


  /** GETTERS **/

  /**
   * Returns the value of the name.
   * @returns The name of the ingredient.
   */
  public get name(): string {
    return this.name_;
  }

  /**
   * Returns the value of the price.
   * @returns The price of the ingredient.
   */
  public get price(): number {
    return this.price_;
  }

  /**
   * Returns the value of the ingredients.
   * @returns The ingredients of the ingredient.
   */
   public get ingredients(): Ingredient[] {
    return this.ingredients_;
  }

  /**
   * Returns the value of the nutritionalValues.
   * @returns The nutritionalValues of the ingredient.
   */
  public get nutritionalValues(): MacroNutrients {
    return this.nutritionalValues_;
  }

  /**
   * Returns the value of the predominantFoodGroup.
   * @returns The predominantFoodGroup of the ingredient.
   */
  public get predominantFoodGroup(): FoodGroup {
    return this.predominantFoodGroup_;
  }
}