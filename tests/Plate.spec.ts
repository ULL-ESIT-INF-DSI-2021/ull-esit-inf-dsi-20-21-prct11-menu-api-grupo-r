import 'mocha';
import {expect} from 'chai';
import {Plate} from "../src/models/Plate";
import {Location} from '../src/models/Location'
import {FoodGroup} from "../src/models/Enums";
import {Ingredient} from "../src/models/Ingredient";
import {MacroNutrients} from "../src/models/MacroNutrients";

const country1: string = "España";
const country2: string = "Francia";
const country3: string = "Alemania";
const city1: string = "Madrid";
const city2: string = "París";
const city3: string = "Berlín";
const street1: string = "Gran Vía";
const street2: string = "Campos Elíseos";
const street3: string = "Unter Den Linden";
const portal1: number = 17;
const portal2: number = 13;
const portal3: number = 3;
const location1 = new Location(country1, city1, street1, portal1);
const location2 = new Location(country2, city2, street2, portal2);
const location3 = new Location(country3, city3, street3, portal3);

const carbohydrates1: number = 10;
const carbohydrates2: number = 20;
const carbohydrates3: number = 15;
const proteins1: number = 30;
const proteins2: number = 40;
const proteins3: number = 35;
const lipids1: number = 50;
const lipids2: number = 60;
const lipids3: number = 55;
const nutrients1 = new MacroNutrients(carbohydrates1, proteins1, lipids1);
const nutrients2 = new MacroNutrients(carbohydrates2, proteins2, lipids2);
const nutrients3 = new MacroNutrients(carbohydrates3, proteins3, lipids3);

const price1: number = 25;
const price2: number = 35;
const price3: number = 45;

const foodGroup1: FoodGroup = FoodGroup.Cereal;
const foodGroup2: FoodGroup = FoodGroup.Meat;
const foodGroup3: FoodGroup = FoodGroup.Fish;

const amount1: number = 100;
const amount2: number = 200;
const amount3: number = 300;

const name1: string = "Avena";
const name2: string = "Ternera";
const name3: string = "Sargo";


const ingredient1 = new Ingredient(name1, price1, location1, foodGroup1, nutrients1, amount1);
const ingredient2 = new Ingredient(name2, price2, location2, foodGroup2, nutrients2, amount2);
const ingredient3 = new Ingredient(name3, price3, location3, foodGroup3, nutrients3, amount3);

const plateName1: string = "Pollo al horno";
const plateName2: string = "Pollo con pescado";

const platePrice1: number = 95;
const platePrice2: number = 0;

const nutritionalValues1 = new MacroNutrients(50, 190, 530);
const nutritionalValues2 = new MacroNutrients(carbohydrates1, proteins1, lipids1);

const ingredientsArr1: Ingredient[] = [ingredient1, ingredient2];
const ingredientsArr2: Ingredient[] = [ingredient1];
const ingredientsArr3: Ingredient[] = [ingredient1, ingredient2, ingredient3];

const plate = new Plate(plateName1, ingredientsArr1, foodGroup1);


describe('Funcionamiento dela clase Plate:', () => {
  describe('Se puede puede acceder a sus atributos:', () => {
    it('Se puede acceder al nombre.', () => {
      expect(plate.name).to.be.equal(plateName1);
    });
    it('Se puede acceder al precio.', () => {
      expect(plate.price).to.be.equal(platePrice1);
    });
    it('Se puede acceder a los ingredientes.', () => {
      expect(plate.ingredients).to.be.equal(ingredientsArr1);
    });
    it('Se puede acceder a los valores nutricionales.', () => {
      expect(plate.nutritionalValues).to.be.deep.equal(nutritionalValues1);
    });
    it('Se puede acceder al grupo predominante.', () => {
      expect(plate.predominantFoodGroup).to.be.equal(foodGroup1);
    });
  });
  describe('Se puede pueden modificar sus atributos:', () => {
    it('Se puede modificar el nombre.', () => {
      plate.name = plateName2;
      expect(plate.name).to.be.equal(plateName2);
    });
    it('Se pueden modificar los ingredientes.', () => {
      plate.ingredients = ingredientsArr2;
      expect(plate.ingredients).to.be.equal(ingredientsArr2);
    });
    it('Se puede modificar el grupo predominante.', () => {
      plate.predominantFoodGroup = foodGroup2;
      expect(plate.predominantFoodGroup).to.be.equal(foodGroup2);
    });
  });
});