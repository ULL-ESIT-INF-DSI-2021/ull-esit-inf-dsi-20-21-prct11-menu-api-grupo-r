import {Location} from './Location'
import {FoodGroup} from './Enums'
import {MacroNutrients} from './MacroNutrients'

/**
 * Stores a simple ingredient.
 * @var name_ Name of the ingredient.
 * @var price_ Price of the ingredient for each 100gr.
 * @var location_ Origin of the ingredient.
 * @var foodGroup_ Food group of the ingredient.
 * @var macroNutrients_ Macronutrients in each 100gr.
 * @var amount_ Amount of the ingredient count in grams.
 */
export class Ingredient {
  private name_: string;
  private price_: number;
  private location_: Location;
  private foodGroup_: FoodGroup;
  private macroNutrients_: MacroNutrients;
  private amount_: number;

  /**
   * Stores all the values.
   * @param newPrice Price of the ingredient.
   * @param newLocation Origin of the ingredient.
   * @param newFoodGroup Food group of the ingredient.
   * @param newMacroNutrients Macronutrients in each 100gr of the ingredient.
   */
  constructor(newName: string, newPrice: number, newLocation: Location, newFoodGroup: FoodGroup, newMacroNutrients: MacroNutrients, newAmount: number) {
    this.name_ = newName;
    this.price_ = newPrice;
    this.location_ = newLocation;
    this.foodGroup_ = newFoodGroup;
    this.macroNutrients_ = newMacroNutrients;
    this.amount_ = newAmount;
  }

  /**
   * Calculates the nutritional values in all the ingredient.
   * @returns the nutritional values in all the ingredient.
   */
  public getNutritionalValues(): MacroNutrients {
    let result: MacroNutrients = this.macroNutrients;
    result.carbohydrates = (result.carbohydrates * 100) / this.amount;
    result.lipids = (result.lipids * 100) / this.amount;
    result.proteins = (result.proteins * 100) / this.amount;
    return result;
  }

  /**
   * Calculates the nprice of the ingredient.
   * @returns the nprice of the ingredient.
   */
  public getPrice(): number {
    return this.price * this.amount;
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
  
  /**
   * Sets a new value for the amount.
   * @param newAmount Contains the amount of the ingredient.
   */
   public set amount(newAmount: number) {
    this.amount_ = newAmount;
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

  /**
   * Returns the value of the amount.
   * @returns The amount of the ingredient.
   */
  public get amount(): number {
    return this.amount_;
  }
}