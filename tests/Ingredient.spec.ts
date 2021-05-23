import 'mocha';
import {expect} from 'chai';
import {Location} from '../src/models/Location'
import {FoodGroup} from '../src/models/Enums'
import {Ingredient} from '../src/models/Ingredient'
import {MacroNutrients} from '../src/models/MacroNutrients'

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

const amount1: number = 100;
const amount2: number = 200;

const totalPrice: number = (price2 * amount2) / 100;
const totalCarbohydrates: number = (carbohydrates2 * amount2) / 100;
const totalProteins: number = (proteins2 * amount2) / 100;
const totalLipids: number = (lipids2 * amount2) / 100;
const totalNutrients = new MacroNutrients(totalCarbohydrates, totalProteins, totalLipids);

const name1: string = "Avena";
const name2: string = "Ternera";


const ingredient = new Ingredient(name1, price1, location1, foodGroup1, nutrients1, amount1);

describe('Funcionamiento de la clase Ingredient:', () => {
  describe('Se puede puede acceder a sus atributos:', () => {
    it('Se puede acceder al nombre.', () => {
      expect(ingredient.name).to.be.equal(name1);
    });
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
    it('Se puede acceder a la cantidad.', () => {
      expect(ingredient.amount).to.be.equal(amount1);
    });
  });
  describe('Se pueden modificar sus atributos:', () => {
    it('Se puede modificar el nombre.', () => {
      ingredient.name = name2;
      expect(ingredient.name).to.be.equal(name2);
    });
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
    it('Se puede modificar la cantidad.', () => {
      ingredient.amount = amount2;
      expect(ingredient.amount).to.be.equal(amount2);
    });
  });
  describe('Funcionamiento de las demás funciones:', () => {
    it('Se puede obtener el valor nutricional completo.', () => {
      expect(ingredient.getNutritionalValues()).to.be.deep.equal(totalNutrients);
    });
    it('Se puede obtener el precio completo.', () => {
      expect(ingredient.getPrice()).to.be.equal(totalPrice);
    });
  });
});