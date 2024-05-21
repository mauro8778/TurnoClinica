import server from "./server";
import {PORT} from "./config/envs";

server.listen(3000,()=>{
    console.log("server listening on port 3000")
});
