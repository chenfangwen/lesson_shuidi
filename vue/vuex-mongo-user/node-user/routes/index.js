const express = require('express');
const user = express.Router();
const db = require('../db/db.js');
const User = require('../models/user.js');
// var user = new User({
// 	"address" : { "city" : "石家庄", "state" : "河北", "pincode" : "520" },
// 	"tags" : [ "love_chenfangwen", "art" ],
// 	"name" : "刘姿依"
// })
// user.save(function (err, user) {
//     if (err) return console.error(err);
//   });


// User.find((err, users) => {
// 	if (err) return console.error(err);
// 	console.log(users);
// })
User // mongoose 
    .find({tags: 'love_chenfangwen'},(err, users) => {
      if (err) return console.error(err);
      console.log('喜欢陈方闻的是：'+users[0].name);
    })

user.get('/', async(req, res) => {
  User // mongoose 
    .find({})
    .exec((err, concats) => {
      res.json(concats);
    })
})

user.get('/tag/:tag', async(req, res) => {
  const tag = req.params.tag;
  // console.log(tag, 'node');
  User
    .find({tags: tag})
    .exec((err, users) => {
      res.json(users)
    })

})


module.exports =  (app) => {
  app.use('/users', user);
}