import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT,()=>{
    console.log("server listening on port ${PORT}")
});