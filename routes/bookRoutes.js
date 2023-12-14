import { Router } from "express";
import bookController  from "../controllers/bookController.js";

const bookControllerInstance = new bookController()     

const bookRoutes= Router()     

/*
bookRoutes.post("/",xController.create)
bookRoutes.get("/getAll",xController.getAll)  // cambie "x" por getAll
bookRoutes.get("/:amount",xController.getAmount)
*/

bookRoutes.post("/", bookController.create);
bookRoutes.get("/getAll", bookController.getAll);
bookRoutes.delete("/:code", bookController.remove);
bookRoutes.get("/:code", bookController.getByCode);

export default bookRoutes