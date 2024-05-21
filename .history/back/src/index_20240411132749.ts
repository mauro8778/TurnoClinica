import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";
import { preLoadData, PreLoadCredentials } from "./helpers/preloadData";

AppDataSource.initialize()
.then(res=>{
    console.log("conexcion a la base de datos")
    preLoadData()
    PreLoadCredentials()
    server.listen(PORT,() => {
        console.log(`server listening on port ${PORT}`);
    });
})

