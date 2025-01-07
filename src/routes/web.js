// những file điều hướng thông thường thì viết ở đây 

import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

// định nghĩa 1 function 
/**
 * 
 * @param {*} app -express app 
 */

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

    // đường link sẽ bắt đầu từ trang / là trang home 
    return app.use("/", router);

}

export default initWebRouters;