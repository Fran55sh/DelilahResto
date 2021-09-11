# DELILAH RESTO
## Proyecto sprint 3 - ACAMICA

### Descripcion del proyecto:
API REST para el manejo de un sistema de pedidos onlinea para un restaurante.
Consiste en CRUD de usuarios, productos y Ordenes de pedidos.

### Pre-requisitos

Debes tener instalado lo siguiente para poder inicializar el proyecto

    - Node JS
    - MariaBD
    - NPM

### Dependencias utilizadas:

    - mariaDB
    - express
    - dotenv
    - jsonwebtoken
    - mysql2
    - sequelize
    - yamljs
    - swagger-ui-express

### Instalacion de Dependencias:

```
$ npm install
```

### Base de Datos

Para la creacion de la base de datos se debe utilizar algun gestor de bases de datos y ejecutar el siguiente comando.

```
CREATE DATABASE delilah;
```

En la raiz del repositorio encontras la carpeta *database* y dentro de ella el archivo *database.sql* donde se encuentran las sentencias SQL que deberas ejecutar en tu gestor de base de datos

### Servidor

abrir el archivo *.env* y configurar los parametros de la base de datos y configuracion del serviror

- PORT (Puerto del servidor)
- JWT_SECRET (password para verificar token)
- DB_HOST  (Host donde esta localizada la DB)
- DB_PORT  (Puerto donde esta localizada la DB)
- DB_USER  (Usuario de la DB)
- DB_PASSWORD (Password de la DB)
- DB_NAME  (Nombre con la que fue creada la base de dato)

**ejemplo:**
```
PORT=3003
JWT_SECRET=secret

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=0000
DB_NAME=delilah
```

### Inicializar el servidor

```
$ npm run dev
```

### Consideraciones generales de la API

Dentro de las sentencias SQL esta la creacion de un usuario de prueba con permisos de administrador
```
Usuario: admin
Password: admin1234
```
Se utilizo jsonwebtoken para autinticar al usuario y otorgarle o no permiso a los distintos endpoints. ir al endpoint de login para obtener el token.

### Documentacion de la API

Para visualizar la documentacion swagger presione [aqui](http://localhost:3000/api-docs/)

 