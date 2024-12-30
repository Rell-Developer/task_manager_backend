import express from "express";
import taskRouter from "./routes/task.routes.js";
import userRouter from "./routes/user.routes.js";
import conectarDB from "./config/db.js";
import { configDotenv } from "dotenv";
import swaggerUiExpress from "swagger-ui-express";
import fs from "fs";
import cors from "cors";

// Cargamos el json de la documentación de swagger
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const swaggerJson = loadJSON("./swagger/swagger.json");

// Instancia del express
const app = express();
app.use(express.json());
app.use("/api-docs",swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson));
configDotenv();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del request esta permitido
            callback(null, true);
        } else {
            callback(console.log('No permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));

// Declaracion de las rutas
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

// Al escucha
app.listen(process.env.SERVER_PORT, () => {
    console.log("Servidor en el puerto: "+process.env.SERVER_PORT);
});