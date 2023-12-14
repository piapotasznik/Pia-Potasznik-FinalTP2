import { Router } from "express";
import bookController from "../controllers/bookController.js";

const bookControllerInstance = new BookController    

const bookRoutes= Router();     


bookRoutes.post("/", bookController.create);
bookRoutes.get("/getAll", bookController.getAll);
bookRoutes.delete("/:code", bookController.remove);
bookRoutes.get("/:code", bookController.getByCode);

export default bookRoutes