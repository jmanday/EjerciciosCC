# Ejercicio3

#####Descargar el repositorio del ejemplo anterior, instalar las herramientas necesarias (principalmente Scala y sbt) y ejecutar el ejemplo desde **sbt**. Alternativamente, buscar otros marcos para REST en Scala tales como Finatra o Scalatra y probar los ejemplos que se incluyan en el repositorio.

Una vez clonado el repositorio del ejemplo, se instalan las herramientas de Scala y sbt como se muestra en la imagen.

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-1.png)


Ahora lanzamos la herramienta de construcción **sbt**, compilamos todo y ejecutamos los tests:

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-2.png)

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-3.png)

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-4.png)


Después de esto ejecutamos la aplicación.

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-5.png)


Para probar que todo ha ido bien pasamos a ejecutar una serie de pruebas.

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-6.png)


Una vez que se ha probado el correcto funcionamiento bajo el marco de **Spray**, vamos a ejecutar un ejemplo sobre el marco de **Scalatra**. Para ello nos clonaremos el siguiente [proyecto](https://github.com/kissaten/scalatra-heroku) de github y lo pasaremos a ejecutar siguiendo las siguientes ordenes:

	$ git clone https://github.com/kissaten/scalatra-heroku.git
	$ chmod +x sbt
	$ ./sbt stage
	$ ./target/universal/stage/bin/heroku-example


![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-7.png)

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-8.png)

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-9.png)

Como se puede comprobar todo se ha realizado correctamente, esta vez bajo el marco de **Scalatra** como se aprecia en el plugin añadido al fichero **plugins.sbt**.

![alt text](https://raw.githubusercontent.com/jmanday/Images/master/EjerciciosCC/Tema1/ej4-10.png)