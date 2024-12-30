import { generateToken } from "../helpers/JWT.js";
import User from "../models/User.js"

const createToken = async (req,res) => {
    try {
        // Obtenemos el token en caso de que lo tenga
        const { authorization } = req.headers;

        // Generamos el nuevo token
        const newToken = generateToken();

        // Si existe un token, buscamos el registro para solo actualizar el token
        // de lo contrario, creamos el registro con el token generado
        const user = authorization ? await User.findOne({ token: authorization.split(' ')[1] }):new User({ token: newToken });

        // Si existe el token, actualizamos el usuario encontrado
        if (authorization && user) {
            // Actualizamos el registro
            await user.updateOne({ token: newToken });
        } else {
            await user.save();
        };
        // Retornamos al cliente
        return res.status(200).json({
            error: false,
            message: "Token generado correctamente",
            result: newToken
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            message: "Hubo un error al generar el token de autorizacion"
        });
    }
};

export {
    createToken
}