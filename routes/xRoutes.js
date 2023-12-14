import { Router } from "express";
import XController from "../controllers/XController.js";   // CAMBIAR POR EL NOMBRE

const xController= new XController()      // CAMBIAR POR EL NOMBRE

const xRoutes= Router()     // CAMBIAR POR EL NOMBRE eh UserRoutes

// AGREGAR RUTAS SEGUN ENDPOINTS
xRoutes.post("/",xController.create)
xRoutes.get("/getAll",xController.getAll)  // cambie "x" por getAll
xRoutes.get("/:amount",xController.getAmount)

export default xRoutes