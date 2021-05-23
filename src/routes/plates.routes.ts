import mongoose from 'mongoose';
import {Plate} from '../models/Plate'
import {PlateSchema, plate} from '../schemas/PlateSchema';
import {Request, Response, Router} from 'express';


class PlateRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  getPlates(req: Request, res: Response) {
    const filter = req.query.name ? { name: req.query.name.toString() } : {};

    plate.find(filter).then((plates) => {
      if (plates.length !== 0) {
        res.send(plates);
      } else {
        res.status(404).send();
      }
    }).catch(() => {
      res.status(500).send();
    })
  }

  getPlateById(req: Request, res: Response) {
    plate.findById(req.params.id).then((plates) => {
      if (!plates) {
        res.status(404).send();
      } else {
        res.send(plates);
      }
    }).catch(() => {
      res.status(500).send();
    });
  }

  postPlate(req: Request, res: Response) {
    plate.save().then((plates) => {
      res.status(201).send(plates);
    }).catch((error: Error) => {
      res.status(400).send(error);
    });
  }

  patchPlate(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'A name must be provided',
      });
    } else {
      const allowedUpdates = ['name', 'courseType', 'ingredients', 'coursePrice', 'courseComposition'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

      if (!isValidUpdate) {
        res.status(400).send({
          error: 'Update is not permitted',
        });
      } else {
        plate.findOneAndUpdate({ name: req.query.name.toString() }, req.body, {
          new: true,
          runValidators: true,
        }).then((course) => {
          if (!course) {
            res.status(404).send();
          } else {
            res.send(course);
          }
        }).catch((error) => {
          res.status(400).send(error);
        });
      }
    }
  }

  deletePlate(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'A name must be procided',
      });
    } else {
      plate.findOneAndDelete({ name: req.query.name.toString() }).then((course) => {
        if (!course) {
          res.status(404).send();
        } else {
          res.send(course);
        }
      }).catch(() => {
        res.status(400).send();
      })
    }
  }

  routes() {
    this.router.get('/plates', this.getPlates);
    this.router.get('/plates/:id', this.getPlateById);
    this.router.post('/plates', this.postPlate);
    this.router.patch('/plates', this.patchPlate);
    this.router.delete('/plates', this.deletePlate);
  }
}

const courseRoutes = new PlateRoutes();
courseRoutes.routes();
export default courseRoutes.router;