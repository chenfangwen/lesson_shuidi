// 二维码schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QRCodeSchema = new Schema({
  // _id
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  scanned: {
    type: Boolean,
    default: false
  },
  url: String,
  userInfo: {
    type: Object,
    default: {}
  },
  status: {
    type: Number,
    default: 0  /* 0未确定， 1确定授权， -1取消授权 */
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expireAt: {
    type: Date
  }
})

module.exports = mongoose.model('qrcode', QRCodeSchema)