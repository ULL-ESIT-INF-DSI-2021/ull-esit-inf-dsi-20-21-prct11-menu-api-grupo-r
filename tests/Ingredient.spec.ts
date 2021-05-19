import 'mocha';
import {expect} from 'chai';
import {Location} from '../src/modules/Location'
import {FoodGroup} from '../src/modules/FoodGroup'
import {Ingredient} from '../src/modules/Ingredient'
import {MacroNutrients} from '../src/modules/MacroNutrients'

const country1: string = "España";
const country2: string = "Francia";
const city1: string = "Madrid";
const city2: string = "París";
const street1: string = "Gran Vía";
const street2: string = "Campos Elíseos";
const portal1: number = 17;
const portal2: number = 13;
const location1 = new Location(country1, city1, street1, portal1);
const location2 = new Location(country2, city2, street2, portal2);

const carbohydrates1: number = 10;
const carbohydrates2: number = 20;
const proteins1: number = 30;
const proteins2: number = 40;
const lipids1: number = 50;
const lipids2: number = 60;
const nutrients1 = new MacroNutrients(carbohydrates1, proteins1, lipids1);
const nutrients2 = new MacroNutrients(carbohydrates2, proteins2, lipids2);

const price1: number = 25;
const price2: number = 35;

const foodGroup1: FoodGroup = FoodGroup.Cereal;
const foodGroup2: FoodGroup = FoodGroup.Meat;

const ingredient = new Ingredient(price1, location1, foodGroup1, nutrients1);

describe('Funcionamiento de la clase Ingredient:', () => {
  describe('Se puede puede acceder a sus atributos:', () => {
    it('Se puede acceder al precio.', () => {
      expect(ingredient.price).to.be.equal(price1);
    });
    it('Se puede acceder a localización.', () => {
      expect(ingredient.location).to.be.equal(location1);
    });
    it('Se puede acceder al grupo alimenticio.', () => {
      expect(ingredient.foodGroup).to.be.equal(foodGroup1);
    });
    it('Se puede acceder a los nutrientes.', () => {
      expect(ingredient.macroNutrients).to.be.equal(nutrients1);
    });
  });
  describe('Se pueden modificar sus atributos:', () => {
    it('Se puede modificar el precio.', () => {
      ingredient.price = price2;
      expect(ingredient.price).to.be.equal(price2);
    });
    it('Se puede modificar la localización.', () => {
      ingredient.location = location2;
      expect(ingredient.location).to.be.equal(location2);
    });
    it('Se puede modificar el grupo alimenticio.', () => {
      ingredient.foodGroup = foodGroup2;
      expect(ingredient.foodGroup).to.be.equal(foodGroup2);
    });
    it('Se pueden modificar los nutrientes.', () => {
      ingredient.macroNutrients = nutrients2;
      expect(ingredient.macroNutrients).to.be.equal(nutrients2);
    });
  });
});