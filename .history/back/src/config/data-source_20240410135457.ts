import {DataSource} from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Simona8778",
    database: "usuarios",
    synchronize: true,
    logging: true,
    entities: [user],
    subscribers: [],
    migrations: [],
})