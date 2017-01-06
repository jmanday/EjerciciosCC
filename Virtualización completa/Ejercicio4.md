# Ejercicio 4

####Crear una máquina virtual Linux con 512 megas de RAM y entorno gráfico LXDE a la que se pueda acceder mediante VNC y ssh.

Lo primero es crear el disco duro virtual:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen190.png?raw=true) 


Voy a instalar **lubuntu** ya que cuenta con el entorno gráfico **lxde**, asignándole 512M de ram:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen191.png?raw=true) 

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen192.png?raw=true) 

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen193.png?raw=true) 


Una vez instalado lo arranco:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen194.png?raw=true) 

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen195.png?raw=true) 


Para acceder a la máquina mediante **vnc** instalo en la máquina anfitriona el cliente **vinagre:**

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen196.png?raw=true) 


Una vez que se ha instalado el cliente vnc arranco la máquina virtual con la siguiente orden:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen197.png?raw=true) 


y conociendo la dirección ip de la interfaz **virbr0** me conecto a la máquina:

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen198.png?raw=true) 

![alt text](https://github.com/jmanday/Imagenes/blob/master/imagen199.png?raw=true) 
