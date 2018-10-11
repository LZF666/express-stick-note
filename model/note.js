const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/database.sqlite')
});

//1 hello user-name 22222 33333 

var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING
  }
});
// Note.sync()
// // 初始化
// Note.drop({force:true})
// Note.drop();
// Note.sync().then(function () {
//   Note.create({
//     text: '这是一个简单的便利贴应用。'
//   })
// }).then(function () {
//   Note.findAll({
//     raw: true
//   }).then(function (notes) {
//     console.log(notes)
//   })
// })


// 测试从数据库中获取数据
// Note.findAll({
//   raw: true
// }).then(function (notes) {
//   console.log(notes)
// })

//测试是否连接上了数据库
// sequelize
//   .authenticate()
//   .then(function (err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });
module.exports.Note = Note;