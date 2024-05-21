import { response, request } from "express";
import router from "./routes/indexRoutes";

const bodyParser= require("body-parser")
const express= require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router)