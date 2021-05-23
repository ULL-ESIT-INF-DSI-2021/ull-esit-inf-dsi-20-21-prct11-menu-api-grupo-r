# Informe práctica 11 - API Node/Express de gestión de información nutricional

<p align="center">
    <a href="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/actions/workflows/tests.yml">
        <img alt="Tests" src="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/actions/workflows/tests.yml/badge.svg">
    </a>
    <a href='https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r?branch=main'>
        <img src='https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-k/badge.svg?branch=main' alt='Coverage Status' />
    </a>
    <a href='https://sonarcloud.io/dashboard?id=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-hugofernandezs'>
        <img src='https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-hugofernandezs&metric=alert_status' alt='Quality Gate Status' />
    </a>
</p>

## Introducción
En esta práctica, implementaremos una API, haciendo uso de Node/Express, que permitirá llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de ingredientes, platos y menús.

## Antes de empezar
Antes de empezar, hemos de crear la estructura. Para ello nos haremos los mismos pasos que llevamos haciendo durante el transcurso del tiempo, en bibliografía estarán los enlaces que hemos estado siguiendo.

## Codigo de la práctica
Pinche [aquí](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/tree/main/src) para acceder al código.

## Pruebas unitarias
Pinche [aquí]() para acceder a las pruebas.

## Servidor
El fichero principal para la implementación del servidor ha sido [**server.ts**](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/blob/main/src/Server.ts). En este fichero haremos la gestión para un correcto funcionamiento, para ello tendremos un constructor, dentro de este creamos una variable *database* que almacena la dirección de la base de datos local. A continuación se realiza la conexión con MongoDB utilizando para ello *moongose*. Se establece el puerto donde el servidor escuchará y tras esto mostramos por pantalla el estado de la conexión si se ha hecho con éxito o no.

```typescript
export class Server {
  public app = express();

  constructor(port: number) {
    const DATABASE = 'mongodb://localhost/menu-app';
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

    this.app.use(apiRoutes.router);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server listening on port', this.app.get('port'));
    })
  }
}

const server = new Server(3030);
server.start();
```

Tras esto tenemos unos *middlewares* como **morgan**, **express.json**, **express.urlencoded**, **compression**. Tras el constructor tenemos una función llamada **start** que se encargará de arrancar el servidor en modo escucha.

## Routes
Dentro de la carpeta **routes** tenemos los ficheros para la implentación de las rutas de la API, para poder trabajar con ellas se deben definir unas rutas en las que se harán las peticiones. En el fichero *index.routes.ts* que es el fichero principal dentro de esta carpeta, se define un mensaje de respuesta al hacer una petición a la raíz. Además se asignan e importan a este router todos los archivos de rutas de la API de ingredientes, platos y menús.


```typescript
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
```

A parte del index, tenemos un fichero para ingredientes, platos y menús. Al ser muy parecidos los tres ficheros comentaremos el relativo con los ingredientes.
En este fichero se almacenará la ruta en la que se pueden realizar las peticiones relacionas con los ingredientes (get, post, patch, delete). Para ello se definirán los métodos pertinentes para poder procesar la petición que queramos realizar y tener una respuesta adecuada. Dentro de este fichero se ha definido una clase donde se han implementado las posibles peticiones, dentro de ellas también se han implementado varias opciones como puede ser el caso de la petición **get**, ya que se puede dar el caso de querer obtener todos los ingredientes, un ingrediente por su identificación o se puede obtener por título. Dentro de la clase existe un método llamado *routes* que actuará de gestor de peticiones.

```typescript
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
    const ingredient_ = new ingredient(req.body);
    ingredient_.save().then((ingredient) => {
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
      const allowedUpdates = ['name', 'price', 'location', 'ingredientType', 'macroNutrients', 'amount'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

      if (!isValidUpdate) {
        res.status(400).send({
          error: 'Please enter a valid update',
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
        error: 'U must give the name of the ingredient',
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
```

```typescript
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
```

```typescript
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
    const plate_ = new plate(req.body);
    plate_.save().then((plates) => {
      res.status(201).send(plates);
    }).catch((error: Error) => {
      res.status(400).send(error);
    });
  }

  patchPlate(req: Request, res: Response) {
    if (!req.query.name) {
      res.status(400).send({
        error: 'You must provide a name',
      });
    } else {
      const allowedUpdates = ['name', 'price', 'type', 'platePrice', 'ingredients', 'nutritionalValues', 'mainIngredientType'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));

      if (!isValidUpdate) {
        res.status(400).send({
          error: 'You must enter a valid update data.',
        });
      } else {
        plate.findOneAndUpdate({ name: req.query.name.toString() }, req.body, {
          new: true,
          runValidators: true,
        }).then((plate) => {
          if (!plate) {
            res.status(404).send();
          } else {
            res.send(plate);
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
        error: 'You must give the name of the menu',
      });
    } else {
      plate.findOneAndDelete({ name: req.query.name.toString() }).then((plate) => {
        if (!plate) {
          res.status(404).send();
        } else {
          res.send(plate);
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

const plateRoutes = new PlateRoutes();
plateRoutes.routes();
export default plateRoutes.router;
```

### Get
Para resolver esta petición se hace uso de una constante *query string* y se hace un *find*. Si no se envia el nombre que se quiere buscar por parámetro, la respuesta sería listar todos los ingredientes que existan en la base de datos. Sin embargo si lo usamos, se realizará la búsqueda utilizando el parámetro y retorna una respuesta tras haber ejecutado la búsqueda. En la búsqueda por identificación ocurre lo mismo que hemos comentado.

En caso de que la búsqueda no haya terminado con éxito se ha gestionado dichos errores, retornando un estado de fallo.

### Post
Durante esta petición almacenaremos información en nuestra base de datos, es importante decir que dicha información debe de estar en formato JSON. Esta información debe coincidir en el formato en el que hemos hecho el **Schema de mongoose**.

Al igual que en la petición anterior se han tenido en cuenta los posibles fallos existente y se ha proporcionado la posibilidad de gestionarlos.

### Patch
Durante esta petición lo que haremos es actualizar la información de un determinado ingrediente que tengamos en nuestra base de datos. Para poder actualizar la información de un determinado ingrediente debemos proporcionar un nombre para realizar la búsqueda y poder actualizarlo. Tras esto debemos comprobar los campos en los que queremos modificar la información sean válidos para ello, tras esto se comprueba que el objeto que se va a sobreescribir exista y finalmente se actualizarán los valores.

Igual que en las peticiones anteriores se han gestionado posibles fallos como pueden ser, que no le señalemos por parámetro el nombre del objeto ingredientes que queremos actualizar, otro fallo como por ejemplo intentar actualizar un campo que no es apto para ello o que simplemente que no exista el objeto que queremos actualizar.

### Delete
Durante esta peticion lo que haremos será eliminar un determinado ingrediente, para ello se realizará una búsqueda con el nombre proporcionado por parámetro y lo elimina. Como resultado se enviará el objeto eliminado a modo de respuesta.

Como hemos hecho con anteriores peticiones se han gestionado los errores como por ejemplo que no se le pase por parámetro el nombre del objeto o que simplemente este nombre no esté en la base de datos.

## MongoDB
Es un sistema de código abierto de bases de datos, orientada a documentos, de tipo no relacional donde puedes administrar tus datos mediante una estructura BSON con un esquema dinámico, haciendo que sea más sencillo y rápido de integrar en las aplicaciones. 

```typescript
export class Server {
  public app = express();

  constructor(port: number) {
    const DATABASE = 'mongodb+srv://admin:admin@api.zc40r.mongodb.net/test';
    mongoose.set('useFindAndModify', true);
    mongoose.connect(process.env.MONGODB_URL || DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true
    }).then(db => console.log("Database connected!"))
    .catch(db => console.error("Error connecting to  te database"));

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

const server = new Server(3030);
server.start();
```

En nuestro caso se va a utilizar para crear una base de datos en un servidor para poder albergar los diferentes menús creados para la práctica. Para ello una vez descargado e instalado los paquetes necesarios en la máquina virtual, se procede a descargar la extensión de MongoDB en el Visual Estudio Code para poder crear, administrar y consultar nuestra base de datos.

## Mongoose
Es una biblioteca de javascript que nos permite definir esquemas con datos tipados. Una vez creados los esquema, nos permite crear un modelo basado en dicho esquema, haciendo de este elemento fundamental para gestionar de una manera más sencilla la base de datos de mongodb desde node.js.

## Heroku
Es un servicio en la nube para distintos lenguajes de programación donde podremos desplegar nuestro código y ejecutar el cliente en contenedores virtuales en tiempo real. En nuestro caso hemos creado una cuenta en la la web, creado nuestra app y la hemos vinculado con nuestro github.

## Funcionamiento
Para el funcionamiento hemos utilizado la extensión Thunder Client.

![Thunder](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/blob/gh-pages/Thunder.png)

Aquí podemos ver en la esquina izquierda el tipo de petición que estamos haciendo, en nuestro caso POST, aunque podemos elegir multitud de opciones dentro de estas, como DELETE para borrar o PATCH para modificar. Seguido de esto podemos ver una URL, esta es la dirección de nuestra base de datos alojada en mongoDB Atlas.
En la parte de abao podemos distinguir varios campos como Query, para añadir argumentos típicos de una petición http, body para añadirle cuerpo a la petición... Nosotros nos centraremos en Body, pues es aquí donde le psaremos toda la información.

Seleccionamos el formato JSON pues le vamos a pasar objetos JSON. Y escribimos lo que queramos, por ejemplo en la imagen estamos añadiendo un pollo, por lo que tendremos que pasarle el Schema completo. Si por el contrario quisieramos modificarlo, bastaría con ponerle el nombre del objeto y el campo que queremos modificar con su valor modificado. O para eliminar un objeto bastaría con poner el nombre del mismo.

Todos estos cambios y peticiones se realizan de forma inmediata en el servidor y basta con refrescar el mismo para ver como los cambios son efectivos.

## Conclusión
Durante el desarrollo de esta práctica hemos adquirido conocimientos y experiencia en cuanto a la configuración de APIs en NodeJS junto a Express. Con los conocimientos adquiridos a lo largo de esta asignatura podemos decir que, a nuestro criterio, nos hemos desenvuelto bastante bien con esto y seguramente con mucha menos facilidad con la gestión de peticiones. Mencionar que el uso de herramientas como MongoDB y Heroku nos ha parecido muy interesante y útiles para próximas implementaciones donde se nos propongan problemas semejantes a este.

## Bibliografía
[Guion de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct11-menu-api/)

[SonarCloud](https://sonarcloud.io/)

[MongoDB](https://www.mongodb.com/es)

[Mongoose](https://mongoosejs.com/)

[Heroku](https://www.heroku.com/)

