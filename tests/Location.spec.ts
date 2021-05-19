import 'mocha';
import {expect} from 'chai';
import {Location} from '../src/modules/Location'

const country1: string = "España";
const country2: string = "Francia";
const city1: string = "Madrid";
const city2: string = "París";
const street1: string = "Gran Vía";
const street2: string = "Campos Elíseos";
const portal1: number = 17;
const portal2: number = 13;
const location = new Location(country1, city1, street1, portal1);

describe('Funcionamiento de la clase Location:', () => {
  describe('Se puede puede acceder a sus atributos:', () => {
    it('Se puede acceder al país.', () => {
      expect(location.country).to.be.equal(country1);
    });
    it('Se puede acceder a la ciudad.', () => {
      expect(location.city).to.be.equal(city1);
    });
    it('Se puede acceder a la calle.', () => {
      expect(location.street).to.be.equal(street1);
    });
    it('Se puede acceder al portal.', () => {
      expect(location.portal).to.be.equal(portal1);
    });
  });
  describe('Se pueden modificar sus atributos:', () => {
    it('Se puede modificar el país.', () => {
      location.country = country2;
      expect(location.country).to.be.equal(country2);
    });
    it('Se puede modificar la ciudad.', () => {
      location.city = city2;
      expect(location.city).to.be.equal(city2);
    });
    it('Se puede modificar la calle.', () => {
      location.street = street2;
      expect(location.street).to.be.equal(street2);
    });
    it('Se puede modificar el portal.', () => {
      location.portal = portal2;
      expect(location.portal).to.be.equal(portal2);
    });
  });
});