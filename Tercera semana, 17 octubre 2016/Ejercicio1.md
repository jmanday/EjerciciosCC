## Ejercicio 1 

#### Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

En el siguiente [enlace](https://github.com/jmanday/MEAN/tree/master/Proyecto2) de mi repositorio se encuentra un ejemplo de aplicación que adopta una arquitectura basada en microservicios.

La aplicación es un simple gestor de usuarios en la que es posible realizar operaciones de consultar, añadir, modificar y borrar, es decir, operaciones CRUD.

La arquitectura tiene como núcelo central una API basada en REST FULL debido a que cumple con las operaciones CRET, fundamentada en Nodejs y Express para el backend. La parte de frontend se implementa en Angularjs, mientras que el microservicio que funciona es una base de datos NoSQL en MongoDB para el almacenamiento de los usuarios.  