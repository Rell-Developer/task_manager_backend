# Task Manager - Backend

Para usar el sistema, debe seguir los siguientes pasos, enfasis en el paso #2 debido que la base de datos esta dockerizada en un archivo docker-compose, se comparten variables de entorno para la creacion y conexion de la misma.

### Pasos para instalar el proyecto de manera local
1) Tener nodejs instalado.
2) Tener Docker y su plugin docker compose instalado, debido que la base de datos esta dockerizada, si no lo tiene, [ingrese aqui para instalar docker](https://docs.docker.com/engine/install/) e [ingrese aqui para instalar el plugin compose](https://docs.docker.com/compose/install/).
3) Crear un archivo .env en el directorio raiz del proyecto backend, colocar las siguientes variables de entorno:
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
4) Correr los siguientes comandos en la terminal:
- "docker compose up": Comando para levantar la base de datos, es necesario que ya existan las variables de entorno porque las usaremos en la base de datos.
5) Agregar la direccion de la base de datos en el MONGO_URI: Posiblemente, con el localhost el backend no encuentre el contenedor de la base de datos, por ende, necesitara una direccion ip, al ejecutar "docker inspect task_db" se mostrara mucha informacion sobre el contenedor, y entre ellas, al final encontrara "IPAddress", donde tendra el valor que buscamos para colocar en la variable de entorno, MONGO_URI, reemplazando la palabra localhost, por ejemplo, cambiaria de esta forma: "mongodb://172.18.0.3:27017/task_db". Importante, es necesario que el contenedor este activo porque sino, el valor IPAddress aparecera vacio.
6) Correr los siguientes comandos en la terminal:
- "npm install": Comando para instalar todas las dependencias.
- "npm run dev": Comando para ejecutar el modo desarrollador y refrescar el frontend cuando detecte un cambio en el codigo.

### Enlace del proyecto desplegado
- [Task Manager]()

### Autor
- [Roque Lopez](https://www.linkedin.com/in/roque-lopez-4800731a2/)
