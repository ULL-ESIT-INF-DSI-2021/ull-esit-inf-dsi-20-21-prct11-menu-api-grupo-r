import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';

export const patchRouter = express.Router();

/**
 * 
 */
patchRouter.patch('/ingredients', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  const camposPermitidos = ['name', 'origin', 'group', 'lipids', 'carbohydrates', 'proteins', 'kcalories', 'price'];
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const ingredient = await Ingredient.findOneAndUpdate({
      name: req.query.name.toString(),
    }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/ingredient:id', async (req, res) => {
  const camposPermitidos = ['name', 'origin', 'group', 'lipids', 'carbohydrates', 'proteins', 'kcalories', 'price']; 
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send();
  }
});
