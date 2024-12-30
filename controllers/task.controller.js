import Task from "../models/Task.js";

const create = async(req,res) => {
    try {
        // Extraemos los campos para crear la tarea
        const { title, description } = req.body;
        
        // Creamos el objecto de una tarea
        const task = new Task({
            title,
            description
        });

        // Guardamos esta informacion
        const taskSaved = await task.save();
        
        // Retornamos
        return res.status(201).json({
            error: false,
            message: "Tarea creada correctamente",
            result: taskSaved
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: true,
            message: "Hubo un error al crear la tarea"
        });
    }
}

const read = async(req,res) => {
    try {
        // Obtenemos el valor de estatus por si se necesita a la hora de buscar
        const { filter } = req.headers;
        // Buscamos las tareas
        const tasks = await Task.find(
            Object.keys(req.headers).includes("filter")
            ? { completed: filter == "true" }
            : {}
        );
        // Las retornamos
        return res.status(200).json({
            error: false,
            message: "Tareas encontradas",
            result: tasks
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: true,
            message: "Hubo un error al buscar las tareas"
        });
    }
}

const readById = async(req,res) => {
    try {
        // Obtenemos el id de los parametros
        const { id } = req.params;
        // Buscamos en el modelo por el id
        const task = await Task.findById(id);
        // Validamos si no existe la tarea
        if(!task){
            return res.status(404).json({
                error: true,
                message:"Tarea no encontrada"
            });
        }
        // Retornamos el resultado
        return res.status(200).json({
            error: false,
            message: "Tarea encontrada",
            result: task
        });
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: "Hubo un error al buscar la tarea"
        });
    }
}

const update = async(req,res) => {
    try {
        // Obtenemos el id de la tarea y los datos a guardar
        const { id } = req.params;
        const data = req.body;
        // Buscamos la tarea
        const task = await Task.findById(id);
        // Validamos que lo haya encontrado
        if (!task) {
            return res.status(404).json({
                error: true,
                message: "Tarea no encontrada"
            });
        }
        // Actualizamos el registro
        await task.updateOne(data);
        // Retornamos
        return res.status(200).json({
            error: false,
            message: "Tarea editada correctamente"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: true,
            message: "Hubo un error al editar la tarea"
        });
    }
};

const deleteTask = async(req,res) => {
    try {
        // Obtenemos el id de la tarea a eliminar
        const { id } = req.params;
        // Buscamos la tarea
        const task = await Task.findById(id);
        // Validamos que exista
        if (!task) {
            return res.status(404).json({
                error: true,
                message: "Tarea no encontrada"
            });
        }
        // Borramos el registro
        await task.deleteOne();
        // Retornamos
        return res.status(200).json({
            error: false,
            message: "Tarea eliminada correctamente"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: true,
            message: "Hubo un error al eliminar la tarea"
        });
    }
}

export {
    create,
    read,
    readById,
    update,
    deleteTask
}