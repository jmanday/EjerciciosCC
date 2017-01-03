# Ejercicio3

####Crear una descripción del módulo usando **package.json**. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Para la aplicación que se ha realizado, son necesarios los módulos de **mongoose** para la base de datos y **express** para el servidor. Ambos son declarados como dependencias de la aplicación en el fichero **package.json** que se describe a continuación.

	{
	  "name"         : "Porra",
	  "version"      : "0.0.1",
	  "description"  : "Sencilla app para un porra de partidos de fútbol",
	  "main"         : "server.js",
	  "author"       : "Jesús Manday",
	  "dependencies" : {
	    "express"    : "~3.4.4",
	    "mongoose"   : "~3.6.2"
	  }
	}

