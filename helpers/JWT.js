import jwt from "jsonwebtoken";

export const generateToken = (data) => {
    try {
        return jwt.sign(
            { data }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: 2 * 1000000}
        );
    } catch (error) {
        return "Hubo un error al generar el token"
    }
}

export const validateToken = (token) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        return {
            error: false,
            message: "Token valido"
        }
    } catch (error) {
        return {
            error: true,
            message:"Hubo un error al verificar el token"
        }
    }
}