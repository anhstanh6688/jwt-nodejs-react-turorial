// định nghĩa hàm 

const handleHelloWord = (req, res) => {
    // return res.send("Hello work from controller");
    // cách khác mình sẽ tìm trong home.ejs 
    return res.render("home.ejs")
}

const handleUserPage = (req, res) => {
    //model => get data from database
    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    console.log(">>> check request: ", req.body);
    return res.send("handleCreateNewUser");
}
// key word module export để export ra 
module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser
}