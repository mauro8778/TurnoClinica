import { response, request } from "express";
import router from "./routes/indexRoutes";
import {PORT} from"./config/envs";



const bodyParser= require("body-parser")
const express= require("express");

const app = express();
const PORT = 

app.use(bodyParser.json());
app.use(router)

app.listen(PORT,()=>{
    console.log("estas escuchando puerto 3000")
});

export default app;