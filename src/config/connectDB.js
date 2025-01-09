
const Sequelize = require('sequelize');

// tạo hàm để kết nối 
const sequelize = new Sequelize('jwt', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

//hàm test xem kết nối tới DB được chưa
// do có keyword là 'await' ở dưới nên giờ phải đnghia hàm có async 
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}






export default connection;