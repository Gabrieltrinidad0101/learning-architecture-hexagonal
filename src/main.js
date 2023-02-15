import express from "express";
import {userRouter} from "./user/infrastructure/user-router.js";


const start = async (port = 3001)=>{
    const app = express();
    app.use(express.json());
    app.use("/user",userRouter);
    await app.listen(port);
    console.log("start server")
}

start();