import { Router } from "express";
import xRoutes from "./xRoutes.js";  // CAMBIAR POR EL NOMBRE

const router= Router()

//tantos  router.use como entidades tenga. ej routes.use("/users",userRoutes)
router.use("/x", xRoutes)

export default router
