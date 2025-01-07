// những file điều hướng thông thường thì viết ở đây 

import express from "express";

const router = express.Router();

// định nghĩa 1 function 
/**
 * 
 * @param {*} app -express app 
 */
const initWebRouters = (app) => {
    // tham số 1 là đường link url 
    // tham số 2 là 1 hàm, có 2 ts là req và res 
    //req: request, res: responsive
    router.get("/", (req, res) => {
        return res.send("Hello work");
    })
    return app.use("/", router);

}

export default initWebRouters;