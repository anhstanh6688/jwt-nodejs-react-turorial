import express from "express";
// khai báo câu lệnh này mới chạy được câu lệnh 11 
require("dotenv").config();
// import nnhững hàm vừa tạo ở web.js và configViewEngine.js 
import configViewEngine from "./config/viewEngine";
import initWebRouters from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
// import connection from "./config/connectDB";

// định nghĩa 1 cái đối tượng của express 
// tẠO 1 server 
const app = express();
//config viewEngine
configViewEngine(app);

//config body-parser cần để chỉ thu nhận dữ liệu quan trọng
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//test connectionDB
// connection();


//init web routers
initWebRouters(app);

// sau khi khai báo xong, để chạy server thì dùng 
//tạo 1 cổng port
const PORT = process.env.PORT || 3002; // Cổng đã đổi
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});