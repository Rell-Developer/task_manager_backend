// import User from "../models/User.js";
import { validateToken } from '../helpers/JWT.js';
import User from "../models/User.js";

const checkAuth = async (req, res, next) =>{
    // Validamos si tiene token en los headers
    let token = req.headers.authorization ? req.headers.authorization:req.headers.auth;
    if(token && token.startsWith('Bearer')){
        try {
            // Partimos el valor de autorization para tomar el token
            token = token.split(' ')[1];
            // Validamos con el helper
            const result = validateToken(token);
            // Si hay un error, lo retornamos
            if(result.error){
                return res.status(401).json({
                    error: true,
                    message: 'Token expirado, presione "Refrescar token" para obtener uno'
                })
            };
            // Buscamos el usuario con ese token
            const user = await User.findOne({ token });
            // Si no existe, lo retornamos
            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "Usuario no encontrado con su token de autorizacion, debe generar uno nuevo"
                });
            };
            // Si todo esta bien, continuamos
            return next();
        } catch (error) {
            console.log(error)
            // Si hay un error, lo retornamos
            return res.status(401).json({ message: 'Token no valido o inexistente, presione "Refrescar Token" para obtener uno'});
        }
    };
    // No hubo token
    if(!token){
        // Si hay un error, lo retornamos
        return res.status(401).json({ message: 'Token no valido o inexistente, presione "Refrescar Token" para obtener uno'});
    };
    next();
}

export default checkAuth;