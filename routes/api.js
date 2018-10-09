var express = require('express');
var router = express.Router();
var Note = require('../model/note');

/* 获取所有的 notes */

router.get('/notes', function (req, res, next) {

  Note.findAll({
    raw: true
  }).then(function (notes) {
    console.log("notte")
    res.send({
      status: 0,
      data: notes
    })
  })


});

/*新增note*/
router.post('/notes/add', function (req, res, next) {

  var note = req.body.note;
  console.log('add...', note)
})

/*修改note*/
router.post('/notes/edit', function (req, res, next) {

})

/*删除note*/
router.post('/notes/delete', function (req, res, next) {

})


module.exports = router;