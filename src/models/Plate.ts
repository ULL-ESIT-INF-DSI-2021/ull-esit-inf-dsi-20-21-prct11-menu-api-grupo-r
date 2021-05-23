import {Ingredient, IngredientType} from './Ingredient'
import {MacroNutrients} from './MacroNutrients';

export enum PlateType {
  starter = 'starter',
  firstPlate = 'firstPlate',
  secondPlate = 'secondPlate',
  dessert = 'dessert',
};


export class Plate {
  private name_: string;
  private price_: number;
  private type_: PlateType;
  private ingredients_: Ingredient[];
  private nutritionalValues_: MacroNutrients;
  private mainIngredientType_: IngredientType;

  /**
   * Stores all the values.
   * @param newName Name of the plate.
   * @param newIngredients Ingredients of the plate.
   * @param newPredominantIngredientType Predominant food group of the plate.
   */
  constructor(newName: string, newType: PlateType, newIngredients: Ingredient[], newPredominantIngredientType: IngredientType) {
    this.name_ = newName;
    this.type_ = newType;
    this.price_ = 0;
    this.ingredients_ = newIngredients;
    this.mainIngredientType_ = newPredominantIngredientType;
    this.nutritionalValues_ = new MacroNutrients(0, 0, 0);
    newIngredients.forEach((ingredient) => {
      this.price_ += ingredient.getPrice();
      this.nutritionalValues_.carbohydrates += ingredient.getNutritionalValues().carbohydrates;
      this.nutritionalValues_.proteins += ingredient.getNutritionalValues().proteins;
      this.nutritionalValues_.lipids += ingredient.getNutritionalValues().lipids;
    });
  }

  /**
   * Inserts a new ingredient on the list of ingredients.
   * @param newIngredient Ingredient to insert.
   */
  public insertIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.price_ += newIngredient.getPrice();
    this.nutritionalValues_.carbohydrates += newIngredient.getNutritionalValues().carbohydrates;
    this.nutritionalValues_.proteins += newIngredient.getNutritionalValues().proteins;
    this.nutritionalValues_.lipids += newIngredient.getNutritionalValues().lipids;
  }

  /**
   * Removes an ingredient on the list of ingredients.
   * @param oldIngredient Ingredient to remove.
   * @returns The index of the ingredient or endefined if its not found.
   */
  public removeIngredient(oldIngredient: Ingredient): number | undefined {
    const index: number | undefined = this.ingredients.indexOf(oldIngredient);
    if (typeof index != 'undefined') {
      this.ingredients.splice(index, 1);
      this.price_ += oldIngredient.getPrice();
      this.nutritionalValues_.carbohydrates += oldIngredient.getNutritionalValues().carbohydrates;
      this.nutritionalValues_.proteins += oldIngredient.getNutritionalValues().proteins;
      this.nutritionalValues_.lipids += oldIngredient.getNutritionalValues().lipids;
    }
    return index;
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
   * Sets a new value for the type.
   * @param newType Contains the type of the ingredient.
   */
  public set type(newType: PlateType) {
    this.type_ = newType;
  }
  
  /**
   * Sets a new value for the ingredients.
   * @param newIngredients Contains the ingredients of the ingredient.
   */
   public set ingredients(newIngredients: Ingredient[]) {
    this.ingredients_ = newIngredients;
  }
  
  /**
   * Sets a new value for the mainIngredientType.
   * @param newPredominantIngredientType Contains the mainIngredientType of the ingredient.
   */
   public set mainIngredientType(newPredominantIngredientType: IngredientType) {
    this.mainIngredientType_ = newPredominantIngredientType;
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
   * Returns the value of the type.
   * @returns The type of the ingredient.
   */
  public get type(): PlateType {
    return this.type_;
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
   * Returns the value of the mainIngredientType.
   * @returns The mainIngredientType of the ingredient.
   */
  public get mainIngredientType(): IngredientType {
    return this.mainIngredientType_;
  }
}
