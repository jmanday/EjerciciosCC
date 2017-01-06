# Ejercicio 2 

#### Usar FUSE para acceder a recursos remotos como si fueran ficheros locales. Por ejemplo, sshfs para acceder a ficheros de una máquina virtual invitada o de la invitada al anfitrión.

Comienzo instalando **sshfs** en mi máquina anfitriona:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen90.png?raw=true)


Ahora arranco la máquina virtual, y lo instalo en ella:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen91.png?raw=true)

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen92.png?raw=true)

Añado al usuario al grupo fuse

	sudo usermod -a -G fuse ubuntu



Vemos en la máquina virtual el fichero al que accederemos desde la máquina anfitriona:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen93.png?raw=true) 


En ambas máquinas se instaló **fuse** debido a las depencias existentes entre este y **sshfs**:

Vemos la dirección ip de la máquina remota:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen94.png?raw=true) 


Me creo dentro del directorio **/home/jesus/** de mi máquina anfitriona un directorio donde se reflejará los datos de la máquina remota:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen95.png?raw=true) 


Realizo la conexión:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen96.png?raw=true)


Y vemos el resultado:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen97.png?raw=true)