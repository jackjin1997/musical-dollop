const pkg = require('./package')
const config = require('./config/db')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const index = require('./router/index')
const music = require('./router/music')
//upload++++s
// var fs = require('fs');
// // var express = require('express');
// var multer  = require('multer')
// const avatarUpload = multer({ dest: 'public/avatar/' });

// app.use(express.static('public'));

// router.post(
//   '/upload-avatar',
//   authenticator,
//   avatarUpload.single('avatar'),
//   (req, res) => {
//       // Set { new: true } to return the updated one, rather than the original one.
//       User.findByIdAndUpdate(req.user.id, { avatar: req.file.path }, { new: true }).then(user => {
//           res.json({ message: "ok" });
//       });
//   }
// );
//upload+++e

mongoose.connect(config.mongodb)
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/src/assets/favicon.ico'))
app.use(express.static('dist'))
app.use('/',index)
app.use('/api',music)

app.listen(port, () => {
  console.log(`${pkg.name} listening on port ${port}`)
})

module.exports = app

