# Task Manager - Backend

Para usar el sistema, debe seguir los siguientes pasos, enfasis en el paso #2 debido que la base de datos esta dockerizada en un archivo docker-compose, se comparten variables de entorno para la creacion y conexion de la misma.

### Pasos para instalar el proyecto de manera local
1) Tener nodejs instalado.
2) Crear un archivo .env en el directorio raiz del proyecto backend, colocar las siguientes variables de entorno:
- MONGO_URI: Direccion donde se encuentra la base de datos. Ejemplo: "mongodb://localhost:27017/task_db".
- MONGO_USER: Usuario para la conexion con la base de datos.
- MONGO_PASSWORD: Contraseña del usuario.
- MONGO_MAX_POOL_SIZE: Maximo de conexiones en la base de datos
- MONGO_AUTH_SOURCE: Tipo de usuario para la conexion.
- MONGO_LOCAL_PORT: Puerto donde estara expuesto para la conexion
- MONGO_DOCKER_PORT: Puerto que estara en el contenedor de docker.
- FRONTEND_URL: URL del frontend para agregarlo en la lista blanca para los CORS.
- JWT_SECRET_KEY: Frase o llave secreta para la libreria de JSON Web Token.
- SERVER_PORT: Puerto donde corre el backend.
3) Correr los siguientes comandos en la terminal:
- "npm install": Comando para instalar todas las dependencias.
- "npm run dev": Comando para ejecutar el modo desarrollador y refrescar el frontend cuando detecte un cambio en el codigo.

### Enlace del proyecto desplegado
- [Task Manager]()

### Autor
- [Roque Lopez](https://www.linkedin.com/in/roque-lopez-4800731a2/)
