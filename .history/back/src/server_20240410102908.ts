import express from "express";
import router from "./routes/indexRoutes";


const server= express();
server.use(router);
app.use(express.json());

export default server;