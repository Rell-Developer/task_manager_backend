import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const validateCreateTask = [
    check("title")
        .exists()
        .not()
        .isEmpty(),
    (req,res,next) => validateResult(req,res,next)
];

export const validateUpdateTask = [
    check("title")
        .optional()
        .exists()
        .not()
        .isEmpty(),
    (req,res,next) => validateResult(req,res,next)
];