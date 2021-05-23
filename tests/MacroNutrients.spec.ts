import 'mocha';
import {expect} from 'chai';
import {MacroNutrients} from '../src/models/MacroNutrients'

const carbohydrates1: number = 10;
const carbohydrates2: number = 20;
const proteins1: number = 30;
const proteins2: number = 40;
const lipids1: number = 50;
const lipids2: number = 60;
const nutrients = new MacroNutrients(carbohydrates1, proteins1, lipids1);

describe('Funcionamiento de la clase MacroNutrients:', () => {
  describe('Se puede puede acceder a sus atributos:', () => {
    it('Se puede acceder a los carbohidratos.', () => {
      expect(nutrients.carbohydrates).to.be.equal(carbohydrates1);
    });
    it('Se puede acceder a las proteínas.', () => {
      expect(nutrients.proteins).to.be.equal(proteins1);
    });
    it('Se puede acceder a los lípidos.', () => {
      expect(nutrients.lipids).to.be.equal(lipids1);
    });
  });
  describe('Se pueden modificar sus atributos:', () => {
    it('Se puede modificar los carbohidratos.', () => {
      nutrients.carbohydrates = carbohydrates2;
      expect(nutrients.carbohydrates).to.be.equal(carbohydrates2);
    });
    it('Se puede modificar las proteínas.', () => {
      nutrients.proteins = proteins2;
      expect(nutrients.proteins).to.be.equal(proteins2);
    });
    it('Se puede modificar los lípidos.', () => {
      nutrients.lipids = lipids2;
      expect(nutrients.lipids).to.be.equal(lipids2);
    });
  });
});