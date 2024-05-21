import express from "express";
import router from "./routes/indexRoutes";
import cors from "cors";


const server= express();
server.use(express.json());
server.use(router);
server.use(cors());


export default server;