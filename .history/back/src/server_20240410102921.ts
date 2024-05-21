import express from "express";
import router from "./routes/indexRoutes";


const server= express();
server.use(router);
server.use(express.json());

export default server;