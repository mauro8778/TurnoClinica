import express from "express";
import router from "./routes/indexRoutes";
import cors from "cors";


const server= express();
server.use(cors({
  
  origin: "http://localhost:5173",optionsSuccessStatus:200
}));
server.use(express.json());
server.use(router);



export default server;