import {DataSource} from "typeorm"
import { user } from "../entities/user"
import { credential } from "../entities/credential"
import { appoiment, appoiments } from "../entities/appoiments"
import { getAppoimentServicesID } from "../services/appoimentServices"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Simona8778",
    database: "usuarios",
    //dropSchema:true,
    synchronize: true,
    logging: false,
    entities: [user, credential,appoiment],
    subscribers: [],
    migrations: [],
})

export const userModel=AppDataSource.getRepository(user)
export const appoimentModel=AppDataSource.getRepository(appoiments)