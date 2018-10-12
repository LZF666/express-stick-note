var Sequelize = require('sequelize')
var path = require('path')

var sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/database.sqlite')
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

var Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    uid: {
        type: Sequelize.STRING
    }
});

// Note.sync().then(function () {
//     Note.create({
//         text: '鱼酱一年只能做一次，必须用最新鲜的辣椒，二荆条最好，生姜新鲜肥嫩主要用来去腥，木姜子，又称山胡椒，西南地区特有的佐料，带有浓郁而神秘的香气，大量的食盐保鲜提味，食材混合搅拌，装进坛子密封，美味慢慢酝酿。',
//         uid: '645645'
//     }).then(function () {
//         Note.findAll({
//             raw: true
//         }).then(function (notes) {
//             console.log(notes)
//         })
//     })
// });
// Note.drop();
// Note.findAll({
//   raw: true
// }).then(function (notes) {
//   console.log(notes)
// })

module.exports.Note = Note;