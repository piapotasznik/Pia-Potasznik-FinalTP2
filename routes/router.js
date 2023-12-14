import { Router } from "express";
import bookRoutes from "./bookRoutes.js";  

const router= Router()

//tantos  router.use como entidades tenga.
router.use("/books", bookRoutes)

export default router
