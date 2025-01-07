import express from "express";

/**
 * 
 * @param {*} app -express app 
 */
const configViewEngine = (app) => { //cũng giống 1 function
    // app sẽ tới public 
    app.use(express.static('./src/public'));
    // nói cho express biết mình dùng html thông qua view engine có tên là ejs 
    app.set("view engine", "ejs");
    // nơi tất cả file views sẽ lưu trong views, sau mỗi lần trả về ejs thì sẽ tìm trong views 
    app.set("views", "./src/views");
}

// muốn sử dụng ở các file khác, cần export ra
export default configViewEngine; //default chi export dung 1 ham