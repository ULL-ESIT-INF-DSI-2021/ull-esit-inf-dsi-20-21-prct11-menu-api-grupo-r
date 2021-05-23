import {Router} from 'express'
import ingredientRoutes from './IngredientsRoutes'
import plateRoutes from './PlatesRoutes'
import menuRoutes from './MenusRoutes'

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
    this.router.get('*', (req, res) => {
      res.send('Please, use a valid route');
    })
    this.router.use(ingredientRoutes);
    this.router.use(plateRoutes);
    this.router.use(menuRoutes);
  }
}

const apiRoutes = new ApiRoutes();
apiRoutes.routes();
export default apiRoutes.router;