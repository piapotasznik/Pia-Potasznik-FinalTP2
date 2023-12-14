import express from "express";
import { SERVER_PORT } from "./config/config.js";
import router from "./routes/router.js";
import generalError from "./Midlewares/GeneralError.js";

// BORRAR..
//utiliza el framework Express.js para crear un servidor web

const app = express();  // Creo el servidor

app.use(express.json());  //borrar. usa el md express.json() para permitir que la aplicación procese datos en formato JSON.
app.use(express.urlencoded({ extended: true })); 

app.use("/api", router); //borrar. especifica que todas las rutas definidas en el objeto router estarán
//bajo el prefijo "/api". Por ejemplo, si hay una ruta en router llamada "/users", se accederá a ella 
//como "/api/users".

app.use(generalError)

app.listen(SERVER_PORT, () => {
  console.log("server ok");
});
