import {Request, Response, Router} from 'express';
import {ingredient} from '../schemas/IngredientSchema';

class IngredientRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  getIngredients(req: Request, res: Response) {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    ingredient.find(filter).then((ingredients) => {
      if (ingredients.length !== 0) {
        res.send(ingredients);
      } else {
        res.status(404).send();
      }
    }).catch(() => {
      res.status(500).send();
    })
  }

  getIngredientById(req: Request, res: Response) {
    ingredient.findById(req.params.id).then((ingredient) => {
      if(!ingredient) {
        res.status(404).send();
      } else {
        res.send(ingredient);
      }
    }).catch(() => {
      res.status(500).send();
    });
  }

  postIngredient(req: Request, res: Response) {
    const ingredient = new ingredient(req.body);
    ingredient.save().then((ingredient) => {
      res.status(201).send(ingredient);
    }).catch((error: Error) => {
      res.status(400).send(error);
    });
  }

  patchIngredient(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'A name must be provided',
      });
    } else {
      const allowedUpdates = ['name', 'ingredientGroup', 'location', 'nutrients', 'pricePerKg'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

      if (!isValidUpdate) {
        res.status(400).send({
          error: 'Update is not permitted',
        });
      } else {
        ingredient.findOneAndUpdate({ name: req.query.name.toString() }, req.body, {
          new: true,
          runValidators: true,
        }).then((ingredient) => {
          if (!ingredient) {
            res.status(404).send();
          } else {
            res.send(ingredient);
          }
        }).catch((error) => {
          res.status(400).send(error);
        });
      }
    }
  }

  deleteIngredient(req: Request, res: Response) {
    if(!req.query.name) {
      res.status(400).send({
        error: 'A name must be provided',
      });
    } else {
      ingredient.findOneAndDelete({name: req.query.name.toString()}).then((ingredient) => {
        if(!ingredient) {
          res.status(404).send();
        } else {
          res.send(ingredient);
        }
      }).catch(() => {
        res.status(400).send();
      })
    }
  }

  routes() {
    this.router.get('/ingredients', this.getIngredients);
    this.router.get('/ingredients/:id', this.getIngredientById);
    this.router.post('/ingredients', this.postIngredient);
    this.router.patch('/ingredients', this.patchIngredient);
    this.router.delete('/ingredients', this.deleteIngredient);
  }
}

const ingredientRoutes = new IngredientRoutes();
ingredientRoutes.routes();
export default ingredientRoutes.router;