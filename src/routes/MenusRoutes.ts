import {Request, Response, Router} from 'express'
import {menu} from '../schemas/MenuSchema'

class MenuRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  getMenus(req: Request, res: Response) {
    const filter = req.query.name?{name: req.query.name.toString()}:{};

    menu.find(filter).then((menus) => {
      if (menus.length !== 0) {
        res.send(menus);
      } else {
        res.status(404).send();
      }
    }).catch(() => {
      res.status(500).send();
    })
  }

  getMenuById(req: Request, res: Response) {
    menu.findById(req.params.id).then((menus) => {
      if (!menus) {
        res.status(404).send();
      } else {
        res.send(menus);
      }
    }).catch(() => {
      res.status(500).send();
    });
  }

  postMenu(req: Request, res: Response) {
    const menu_ = new menu(req.body);
    menu_.save().then((menus) => {
      res.status(201).send(menus);
    }).catch((error: Error) => {
      res.status(400).send(error);
    });
  }

  patchMenu(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'You must give the name of th emenu',
      });
    } else {
      const allowedUpdates = ['name', 'price', 'plates', 'mainIngredient', 'nutritionalValues'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

      if (!isValidUpdate) {
        res.status(400).send({
          error: 'You must enter a valid update data.',
        });
      } else {
        menu.findOneAndUpdate({ name: req.query.name.toString() }, req.body, {
          new: true,
          runValidators: true,
        }).then((menu) => {
          if (!menu) {
            res.status(404).send();
          } else {
            res.send(menu);
          }
        }).catch((error) => {
          res.status(400).send(error);
        });
      }
    }
  }

  deleteMenu(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'You must provide a name',
      });
    } else {
      menu.findOneAndDelete({ name: req.query.name.toString() }).then((menu) => {
        if (!menu) {
          res.status(404).send();
        } else {
          res.send(menu);
        }
      }).catch(() => {
        res.status(400).send();
      })
    }
  }

  routes() {
    this.router.get('/menus', this.getMenus);
    this.router.get('/menus/:id', this.getMenuById);
    this.router.post('/menus', this.postMenu);
    this.router.patch('/menus', this.patchMenu);
    this.router.delete('/menus', this.deleteMenu);
  }
}

const menuRoutes = new MenuRoutes();
menuRoutes.routes();
export default menuRoutes.router;