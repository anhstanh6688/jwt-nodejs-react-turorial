import express from "express";
// khai báo câu lệnh này mới chạy được câu lệnh 11 
require("dotenv").config();
// import nnhững hàm vừa tạo ở web.js và configViewEngine.js 
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web";

// định nghĩa 1 cái đối tượng của express 
// tẠO 1 server 
const app = express();
const PORT = process.env.PORT;
//config viewEngine
configViewEngine(app);

//init web routers
initWebRouters(app);

// sau khi khai báo xong, để chạy server thì dùng 
//tạo 1 cổng port
app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);

})