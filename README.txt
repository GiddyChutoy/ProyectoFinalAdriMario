Para que funcione la aplicacion:

- Primero deberas importar la bbdd en mysql. 

- En segundo lugar importar en spring boot la carpete proyectofinal y ejecutarla como spring boot, ademas deberá cambiar en el application propierties en la carpeta resources el usuario y contraseña para la conexion de la bbdd.

-  Para el front abrir en visual la carpeta proyectofinalAngular para hacerla funcionar se debera hacer lo siguiente:

	- instalar los node modules con el comando npm install

	- Para que funcione bien tanto el carousel como los botones dropdown ejecutar el comando ng add @ng-bootstrap/ng-bootstrap

	- Una vez instalados los paquetes ejecutar ng serve para compilar y desplegar e introducir en el navegador localhost:4200  

Nota: Ahora se muestran las imagenes si las hay en la bbdd si no hay se pueden añadir en la BBDD por el mysql para ver el resultado , tambien se pueden agregar eliminar modificar los productos 
y asi como también estan disponibles las peticiones para añadir eliminar y modificar usuarios.

Nota 2: Se puede encontrar un error a la hora de usar las peticiones porque cuando se arranca Spring crea una columna user_password si se elimina la columana UserPassword de la bbdd funcionare correctamente 
de todas maneras intentare subir la BBDD mas actualizada 

