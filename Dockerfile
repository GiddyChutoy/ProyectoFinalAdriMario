#Dockerfile para crear una imagen basada en mysql
FROM mysql:5.7.17

#Se copian los scripts desde la carpeta en la que estén al directorio dentro del contenedor
#En este ejemplo no se va a mapear mediante volúmenes ni a bindear la bbdd.
COPY ./scriptSQL/ /docker-entrypoint-initdb.d/


#docker build -t mariorg/bbdd . es lo que hago para generar la imagen
#docker run -d --network ardkalic --name mi_mysql -e MYSQL_ROOT_PASSWORD=mario -e MYSQL_DATABASE=ardkalic -e MYSQL_PASSWORD=mario -p 3307:3306 mariorg/bbdd y esto para arrancar el contenedor
