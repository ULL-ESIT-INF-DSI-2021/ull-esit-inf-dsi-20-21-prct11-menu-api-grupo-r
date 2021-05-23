import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import compression from 'compression'
import {apiRoutes} from './routes/index.routes'

export class Server {
  public app = express();

  constructor(port: number) {
    const DATABASE = 'mongodb://localhost/menuapi';
    mongoose.set('useFindAndModify', true);
    mongoose.connect(process.env.MONGODB_URL || DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true
    }).then(db => console.log("Database connected!"))
    .catch(db => console.error("Error connecting to Database"));

    this.app.set('port', process.env.PORT  || port);
    
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(compression());

    this.app.use(apiRoutes);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server listening on port', this.app.get('port'));
    })
  }
}