import userService from "../service/userService";

// định nghĩa hàm 
const handleHelloWord = (req, res) => {
    // return res.send("Hello work from controller");
    // cách khác mình sẽ tìm trong home.ejs 
    return res.render("home.ejs")
}

const handleUserPage = async (req, res) => {
    //model => get data from database
    let userList = await userService.getUserList();
    // xóa thằng số thứ 4 
    await userService.deleteUser(6);
    return res.render("user.ejs", { userList });
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.CreateNewUser(email, password, username);

    // để khi submit sẽ load trang ban đầu vẫn là user chứ ko sang trang mới 
    return res.redirect("/user");

}

const handleDeleteUser = async (req, res) => {
    console.log(">>> check id: ", req.params.id);
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }
    console.log("<<< check user: ", user);
    return res.render("user-update.ejs", { userData });
}



// key word module export để export ra 
module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser, handleDeleteUser, getUpdateUserPage
}