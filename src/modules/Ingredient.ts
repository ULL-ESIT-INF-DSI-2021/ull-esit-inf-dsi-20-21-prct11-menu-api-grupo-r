import {Location} from './Location'
import {FoodGroup} from './FoodGroup'
import {MacroNutrients} from './MacroNutrients'

/**
 * Stores a simple ingredient.
 * @var price_ Price of the ingredient.
 * @var location_ Origin of the ingredient.
 * @var foodGroup_ Food group of the ingredient.
 * @var macroNutrients_ Macronutrients in each 100gr of the ingredient.
 */
export class Ingredient {
  private price_: number;
  private location_: Location;
  private foodGroup_: FoodGroup;
  private macroNutrients_: MacroNutrients;

  /**
   * Stores all the values.
   * @param newPrice Price of the ingredient.
   * @param newLocation Origin of the ingredient.
   * @param newFoodGroup Food group of the ingredient.
   * @param newMacroNutrients Macronutrients in each 100gr of the ingredient.
   */
  constructor(newPrice: number, newLocation: Location, newFoodGroup: FoodGroup, newMacroNutrients: MacroNutrients) {
    this.price_ = newPrice;
    this.location_ = newLocation;
    this.foodGroup_ = newFoodGroup;
    this.macroNutrients_ = newMacroNutrients;
  }


  /** SETTERS **/

  /**
   * Sets a new value for the price.
   * @param newPrice Contains the price of the ingredient.
   */
  public set price(newPrice: number) {
    this.price_ = newPrice;
  }
  
  /**
   * Sets a new value for the location.
   * @param newLocation Contains the location of the ingredient.
   */
   public set location(newLocation: Location) {
    this.location_ = newLocation;
  }
  
  /**
   * Sets a new value for the foodGroup.
   * @param newFoodGroup Contains the foodGroup of the ingredient.
   */
   public set foodGroup(newFoodGroup: FoodGroup) {
    this.foodGroup_ = newFoodGroup;
  }
  
  /**
   * Sets a new value for the macroNutrients.
   * @param newMacroNutrients Contains the macroNutrients of the ingredient.
   */
   public set macroNutrients(newMacroNutrients: MacroNutrients) {
    this.macroNutrients_ = newMacroNutrients;
  }


  /** GETTERS **/

  /**
   * Returns the value of the price.
   * @returns The price of the ingredient.
   */
  public get price(): number {
    return this.price_;
  }

  /**
   * Returns the value of the location.
   * @returns The location of the ingredient.
   */
  public get location(): Location {
    return this.location_;
  }

  /**
   * Returns the value of the foodGroup.
   * @returns The foodGroup of the ingredient.
   */
  public get foodGroup(): FoodGroup {
    return this.foodGroup_;
  }

  /**
   * Returns the value of the macroNutrients.
   * @returns The macroNutrients of the ingredient.
   */
  public get macroNutrients(): MacroNutrients {
    return this.macroNutrients_;
  }
}