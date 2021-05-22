import * as express from 'express';
import {Ingredient} from '../modules/IngredientsMongoose';
import {Plate} from '../modules/PlateMongoose';

export const patchRouter = express.Router();

/**
 * Actualizar ingrediente
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

/**
 * Actualizar plato
 */
 patchRouter.patch('/courses', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  const camposPermitidos = ['name', 'type', 'ingredients', 'number', 'price'];
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const plate = await Plate.findOneAndUpdate({
      name: req.query.name.toString(),
    }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/courses:id', async (req, res) => {
  const camposPermitidos = ['name', 'type', 'ingredients', 'number', 'price'];
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const plate = await Plate.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Actualizar menu
 */
 /*patchRouter.patch('/menus', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'Se debe dar un nombre',
    });
  }

  const camposPermitidos = ['name', 'price', 'dishes', 'nutritionalValue', 'groups'];
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const menus = await Menu.findOneAndUpdate({
      name: req.query.name.toString(),
    }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/menus:id', async (req, res) => {
  const camposPermitidos = ['name', 'price', 'dishes', 'nutritionalValue', 'groups'];
  const camposActuales = Object.keys(req.body);
  const actualizarCampo = camposActuales.every((nuevoValor) => camposPermitidos.includes(nuevoValor));

  if (!actualizarCampo) {
    return res.status(400).send({
      error: 'No existe el campo que quiere actualizar',
    });
  }

  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(400).send();
  }
});
*/