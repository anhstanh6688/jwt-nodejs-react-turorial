// mã hóa mật khẩu 
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);


// create the connection to database hay là khai báo để kết nối sql
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'jwt'
// });

const hashUserPassword = (userPassword) => {
    // mã hóa password 
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const CreateNewUser = async (email, password, username) => {

    let hashPass = hashUserPassword(password);
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fiels] =
            await connection.execute('INSERT INTO users(email, password, username) VALUES (?, ? ,?)',
                [email, hashPass, username]);
    } catch (error) {
        console.log(">>> check error: ", error);
    }

    //kết nối với sql
    const [rows, fiels] =
        await connection.execute('INSERT INTO users(email, password, username) VALUES (?, ? ,?)',
            [email, hashPass, username]);

}

const getUserList = async () => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fiels] = await connection.execute('Select * from users');
        return rows;
    } catch (error) {
        console.log(">>> check error: ", error);
    }



}


const deleteUser = async (id) => {

    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fiels] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(">>> check error: ", error);
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fiels] = await connection.execute('Select * FROM users WHERE id=?', [id]);
        console.log(">>> check row: ", row);
        return rows;
    } catch (error) {
        console.log(">>> check error: ", error);
    }
}



// để sử dụng được hàm cần phải export ra 
module.exports = {
    CreateNewUser, getUserList, deleteUser, getUserById
}