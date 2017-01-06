# Ejercicio 6

####Usar juju para hacer el ejercicio anterior.

Partiendo de una instalació previa de juju, lo iniciamos (modificando el archivo de configuración existente):

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen205.png?raw=true)


Modifico en dicho archivo el entorno por defecto:
	
	default: local
	
	
Creo el entorno:
	
	juju bootsrap


Una vez creado el entorno paso a crearme los certificados necesarios para configurar azure:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen206.png?raw=true)



Uno de ellos (**azure.cer**) lo subo a la web de azure:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen207.png?raw=true)


Con el otro (**azure.pem**) lo utilizamos para configurar el entorno de azure en el fichero de configuración de **juju** junto con otros parámetros necesarios como son:

el identificador:
![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen208.png?raw=true)


y el nombre de la cuenta de almacenamiento:
![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen209.png?raw=true)


En definitiva el estado del fichero debe ser el siguiente:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen210.png?raw=true)


Una vez realizado todos los pasos anteriores creo un táper donde instalar los servicios e instalo GUI:

	sudo juju switch azure
	sudo juju bootstrap
	sudo juju deploy --to 0 juju-gui
	sudo juju expose juju-gui


Añado el servicio de **nginx** al táper:

	sudo juju deploy --to 0 cs:~imbrandon/precise/nginx


y lo expongo:

	sudo juju expose nginx

Para comprobar que todo ha ido bien ejecutaremos:

	juju status
