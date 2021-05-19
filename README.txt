Para que funcione la aplicacion:

- Primero deberas importar la bbdd en mysql. 

- En segundo lugar importar en spring boot la carpeta proyectofinal y ejecutarla como spring boot, ademas deberá cambiar en el application propierties en la carpeta resources el usuario y contraseña para la conexion de la bbdd.

- Para el front abrir en visual la carpeta proyectofinalAngular para hacerla funcionar se debera hacer lo siguiente:

	- instalar los node modules con el comando npm install

	- Para que funcione bien tanto el carousel como los botones dropdown ejecutar el comando ng add @ng-bootstrap/ng-bootstrap

	- Una vez instalados los paquetes ejecutar ng serve para compilar y desplegar e introducir en el navegador localhost:4200  

- Para desplegarlo con docker se requerirá tener instalado docker en tu equipo 
	
	- En primer lugar crear una network con el comando docker network create ardkalic 
	
	- Para arrancar el contenedor de la base de datos utilizar docker run -d --network ardkalic --name mi_mysql  -e MYSQL_ROOT_PASSWORD=mario -e MYSQL_DATABASE=ardkalic  -e MYSQL_PASSWORD=mario -p 3307:3306 mariorg/bbdd 

	- Para la parte back docker run --network ardkalic --name ardkalic_back -p 8080:8080 mariorg/back

	- Para la parte front  docker run –d –p 4200:80 –name ardkalic_front mariorg/front 

 -Nota: esos comandos son para las imagenes de Mario pero tienen el mismo contenido que las de Adri