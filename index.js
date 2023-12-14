import express from "express";
import { SERVER_PORT } from "./config/config.js";
import router from "./routes/router.js";
import generalError from "./Midlewares/GeneralError.js";


const app = express(); 

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

app.use(router); 

app.use(generalError)

app.listen(SERVER_PORT, () => {
  console.log("server ok");
});
