# Informe práctica 11 - API Node/Express de gestión de información nutricional


## Introducción
En esta práctica, implementaremos una API, haciendo uso de Node/Express, que permitirá llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de ingredientes, platos y menús.

## Antes de empezar
Antes de empezar, hemos de crear la estructura. Para ello nos haremos los mismos pasos que llevamos haciendo durante el transcurso del tiempo, en bibliografía estarán los enlaces que hemos estado siguiendo.

## Codigo de la práctica
Pinche [aquí] para acceder al código(https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/tree/main/src).

## Pruebas unitarias
Pinche [aquí]() para acceder a las pruebas.

## Servidor
El fichero principal para la implementación del servidor ha sido [**server.ts**](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-r/blob/main/src/Server.ts). En este fichero haremos la gestión para un correcto funcionamiento, para ello tendremos un constructor, dentro de este creamos una variable *database* que almacena la dirección de la base de datos local. A continuación se realiza la conexión con MongoDB utilizando para ello *moongose*. Se establece el puerto donde el servidor escuchará y tras esto mostramos por pantalla el estado de la conexión si se ha hecho con éxito o no. Tras esto tenemos unos *middlewares* como **morgan**, **express.json**, **express.urlencoded**, **compression**. Tras el constructor tenemos una función llamada **start** que se encargará de arrancar el servidor en modo escucha.

