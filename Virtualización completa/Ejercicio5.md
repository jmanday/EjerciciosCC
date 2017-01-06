# Ejercicio 5

####Crear una máquina virtual ubuntu e instalar en ella un servidor nginx para poder acceder mediante web.

Lo primero será conocer las imagenes disponibles de los sistemas operativos:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen200.png?raw=true) 


Compruebo si la imagen del sistema operativo que quiero instalar esta disponible:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen201.png?raw=true) 


Una vez comprobado que esta disponible paso a crear la máquina:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen202.png?raw=true) 


Listo las máquinas que tengo en azure para ver que esta:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen203.png?raw=true) 


Arranco mi máquina virtual creada:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen204.png?raw=true)


Me conecto a la misma mediante ssh:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen211.png?raw=true)

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen212.png?raw=true)


Una vez conectado a la máquina, instalo el servidor **nginx:**

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen213.png?raw=true)


Lo siguiente será habilitar en mi máquina virtual el puerto 80, ya que por ahora solo tiene el 22:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen214.png?raw=true)


Arranco el servicio en dicha máquina:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen215.png?raw=true)


Y pruebo su correcto funcionamiento:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen216.png?raw=true)