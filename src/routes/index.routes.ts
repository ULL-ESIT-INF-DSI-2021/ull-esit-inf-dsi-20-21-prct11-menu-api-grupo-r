import {Router} from 'express'
import ingredientRoutes from './ingredients.routes'
import courseRoutes from './plates.routes'
import MenuRoutes from './menus.routes'

/**
 * Enrutador principal
 */
export class ApiRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', (req, res) => {
      res.send("To use the API, you must go to: /ingredients /plates or /menus");
    })
    this.router.use(ingredientRoutes);
    this.router.use(courseRoutes);
    this.router.use(menuRoutes);
  }
}

const apiRoutes = new ApiRoutes();
apiRoutes.routes();
export default apiRoutes.router;