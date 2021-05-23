/**
 * Stores the location of an ingredient in each 100gr.
 * @var country_ Contains the country of the ingredient.
 * @var city_ Contains the city of the country.
 * @var street_ Contains the street of the city.
 * @var portal_ Contains the portal of the street.
 */
 export class Location {
  private country_: string;
  private city_: string;
  private street_: string;
  private portal_: number;

  /**
   * Stores the nutritionla values.
   * @param newCountry_ Contains the country of the ingredient.
   * @param newCity_ Contains the city of the country.
   * @param newStreet_ Contains the street of the city.
   * @param newPortal_ Contains the portal of the street.
   */
  constructor(newCountry: string, newCity: string, newStreet: string, newPortal: number) {
    this.country_= newCountry;
    this.city_= newCity;
    this.street_= newStreet;
    this.portal_=newPortal;
  }


  /** SETTERS **/

  /**
   * Sets a new value for the country.
   * @param newCountry Contains the country of the ingredient.
   */
  public set country(newCountry: string) {
    this.country_ = newCountry;
  }
  
  /**
   * Sets a new value for the city.
   * @param newCity Contains the city of the ingredient.
   */
   public set city(newCity: string) {
    this.city_ = newCity;
  }
  
  /**
   * Sets a new value for the street.
   * @param newStreet Contains the street of the ingredient.
   */
   public set street(newStreet: string) {
    this.street_ = newStreet;
  }
  
  /**
   * Sets a new value for the portal.
   * @param newPortal Contains the portal of the ingredient.
   */
   public set portal(newPortal: number) {
    this.portal_ = newPortal;
  }


  /** GETTERS **/

  /**
   * Returns the value of the country.
   * @returns The country of the ingredient.
   */
  public get country(): string {
    return this.country_;
  }

  /**
   * Returns the value of the city.
   * @returns The city of the ingredient.
   */
  public get city(): string {
    return this.city_;
  }

  /**
   * Returns the value of the street.
   * @returns The street of the ingredient.
   */
  public get street(): string {
    return this.street_;
  }

  /**
   * Returns the value of the portal.
   * @returns The portal of the ingredient.
   */
  public get portal(): number {
    return this.portal_;
  }
}