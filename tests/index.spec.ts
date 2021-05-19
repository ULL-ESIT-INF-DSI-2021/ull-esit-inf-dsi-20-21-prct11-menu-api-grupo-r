import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index'


describe('Funcionamiento de los Specs:', () => {
  describe('Comprobación de prueba:', () => {
    it('Funcióna la prueba.', () => {
      expect(add(3, 4)).to.be.equal(7);
    });
  });
});