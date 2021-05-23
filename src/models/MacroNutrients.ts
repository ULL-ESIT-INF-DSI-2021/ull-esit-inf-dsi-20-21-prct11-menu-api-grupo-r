/**
 * Stores the macronutrients of an ingredient in each 100gr.
 * @var carbohydrates_ Contains the carbohydrates in 100gr.
 * @var proteins_ Contains the proteins in 100gr.
 * @var lipids_ Contains the lipids in 100gr.
 */
 export class MacroNutrients {
  private carbohydrates_: number;
  private proteins_: number;
  private lipids_: number;

  /**
   * Stores the nutritionla values.
   * @param newCarbohydrates_ Contains the carbohydrates in 100gr.
   * @param newProteins_ Contains the proteins in 100gr.
   * @param newLipids_ Contains the lipids in 100gr.
   */
  constructor(newCarbohydrates: number, newProteins: number, newLipids: number) {
    this.carbohydrates_ = newCarbohydrates;
    this.proteins_ = newProteins;
    this.lipids_ = newLipids;
  }


  /** SETTERS **/

  /**
   * Sets a new value for carbohydrates.
   * @param newCarbohydrates Contains the carbohydrates in 100gr.
   */
  public set carbohydrates(newCarbohydrates: number) {
    this.carbohydrates_ = newCarbohydrates;
  }
  
  /**
   * Sets a new value for proteins.
   * @param newProteins Contains the proteins in 100gr.
   */
   public set proteins(newProteins: number) {
    this.proteins_ = newProteins;
  }
  
  /**
   * Sets a new value for lipids.
   * @param newLipids Contains the lipids in 100gr.
   */
   public set lipids(newLipids: number) {
    this.lipids_ = newLipids;
  }


  /** GETTERS **/

  /**
   * Returns the value of the carbohydrates.
   * @returns The carbohydrates in 100gr.
   */
  public get carbohydrates(): number {
    return this.carbohydrates_;
  }

  /**
   * Returns the value of the proteins.
   * @returns The proteins in 100gr.
   */
  public get proteins(): number {
    return this.proteins_;
  }

  /**
   * Returns the value of the lipids.
   * @returns The lipids in 100gr.
   */
  public get lipids(): number {
    return this.lipids_;
  }
}