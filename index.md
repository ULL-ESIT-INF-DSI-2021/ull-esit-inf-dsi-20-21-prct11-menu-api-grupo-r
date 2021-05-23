# Informe práctica 11 - API Node/Express de gestión de información nutricional


## Introducción
En esta práctica, implementaremos una API, haciendo uso de Node/Express, que permitirá llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de ingredientes, platos y menús.

## Antes de empezar
Antes de empezar, hemos de crear la estructura. Para ello nos haremos los mismos pasos que llevamos haciendo durante el transcurso del tiempo, en bibliografía estarán los enlaces que hemos estado siguiendo.

## Codigo de la práctica
Pinche [aquí](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/tree/main/src) para acceder al código.

## Pruebas unitarias
Pinche [aquí]() para acceder a las pruebas.

## Servidor
El fichero principal para la implementación del servidor ha sido [**server.ts**](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/blob/main/src/Server.ts). En este fichero haremos la gestión para un correcto funcionamiento, para ello tendremos un constructor, dentro de este creamos una variable *database* que almacena la dirección de la base de datos local. A continuación se realiza la conexión con MongoDB utilizando para ello *moongose*. Se establece el puerto donde el servidor escuchará y tras esto mostramos por pantalla el estado de la conexión si se ha hecho con éxito o no. Tras esto tenemos unos *middlewares* como **morgan**, **express.json**, **express.urlencoded**, **compression**. Tras el constructor tenemos una función llamada **start** que se encargará de arrancar el servidor en modo escucha.

## Routes
Dentro de la carpeta **routes** tenemos los ficheros para la implentación de las rutas de la API, para poder trabajar con ellas se deben definir unas rutas en las que se harán las peticiones. En el fichero *index.routes.ts* que es el fichero principal dentro de esta carpeta, se define un mensaje de respuesta al hacer una petición a la raíz. Además se asignan e importan a este router todos los archivos de rutas de la API de ingredientes, platos y menús.

A parte del index, tenemos un fichero para ingredientes, platos y menús. Al ser muy parecidos los tres ficheros comentaremos el relativo con los ingredientes.
En este fichero se almacenará la ruta en la que se pueden realizar las peticiones relacionas con los ingredientes (get, post, patch, delete). Para ello se definirán los métodos pertinentes para poder procesar la petición que queramos realizar y tener una respuesta adecuada. Dentro de este fichero se ha definido una clase donde se han implementado las posibles peticiones, dentro de ellas también se han implementado varias opciones como puede ser el caso de la petición **get**, ya que se puede dar el caso de querer obtener todos los ingredientes, un ingrediente por su identificación o se puede obtener por título. Dentro de la clase existe un método llamado *routes* que actuará de gestor de peticiones.

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

En nuestro caso se va a utilizar para crear una base de datos en un servidor para poder albergar los diferentes menús creados para la práctica. Para ello una vez descargado e instalado los paquetes necesarios en la máquina virtual, se procede a descargar la extensión de MongoDB en el Visual Estudio Code para poder crear, administrar y consultar nuestra base de datos.

## Mongoose
Es una biblioteca de javascript que nos permite definir esquemas con datos tipados. Una vez creados los esquema, nos permite crear un modelo basado en dicho esquema, haciendo de este elemento fundamental para gestionar de una manera más sencilla la base de datos de mongodb desde node.js.

## Heroku
Es un servicio en la nube para distintos lenguajes de programación donde podremos desplegar nuestro código y ejecutar el cliente en contenedores virtuales en tiempo real. En nuestro caso hemos creado una cuenta en la la web, creado nuestra app y la hemos vinculado con nuestro github.

## Conclusión
Durante el desarrollo de esta práctica hemos adquirido conocimientos y experiencia en cuanto a la configuración de APIs en NodeJS junto a Express. Con los conocimientos adquiridos a lo largo de esta asignatura podemos decir que, a nuestro criterio, nos hemos desenvuelto bastante bien con esto y seguramente con mucha menos facilidad con la gestión de peticiones. Mencionar que el uso de herramientas como MongoDB y Heroku nos ha parecido muy interesante y útiles para próximas implementaciones donde se nos propongan problemas semejantes a este.

## Bibliografía
[Guion de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct11-menu-api/)

[SonarCloud](https://sonarcloud.io/)

[MongoDB](https://www.mongodb.com/es)

[Mongoose](https://mongoosejs.com/)

[Heroku](https://www.heroku.com/)

