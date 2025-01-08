// những file điều hướng thông thường thì viết ở đây 

import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();



const handleHelloWord = (req, res) => {
    return res.send("Hello work");
}
const initWebRouters = (app) => {
    // tham số 1 là đường link url 
    // tham số 2 là 1 hàm, có 2 ts là req và res 
    //req: request, res: responsive
    router.get("/", homeController.handleHelloWord);
    // hiển thị giao diện người dùng khi "about" 
    router.get("/user", homeController.handleUserPage);
    // get khác gì post? 
    // get lấy data từ server đẩy lên client, post lấy data từ cliet đẩy lên server 
    router.post("/users/create-user", homeController.handleCreateNewUser);
    // đường link sẽ bắt đầu từ trang / là trang home 
    return app.use("/", router);

}

export default initWebRouters;