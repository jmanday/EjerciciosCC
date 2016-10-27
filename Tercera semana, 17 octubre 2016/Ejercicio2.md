## Ejercicio 2

#### En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

La arquitectura en la que se se basa mi aplicación permite el uso de diferentes lenguajes a través de diversos servicios. En estos momentos sólo se usa un lenguaje de programación; javascript, pero en mejoras futuras se le añadiran otro tipos de servicios que puede implicar el uso de un lenguaje de programación diferente como puede ser Ruby (en el caso del uso de Twitter), etc.  

Para el ámbito que va a tener mi aplicación por ahora, el almacene de datos más conveniente es una base de datos no relacional como MongoDB o persistencia con Redis, siendo la primera de estas la que tiene implementada. Los datos que maneja mi aplicación web son referentes a usuarios actualmente, por lo que no son necesarias transacciones entre tablas en este momento.