var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String ,
    lastName : String,
    email: String ,
    work: String ,
    street: String ,
    city: String ,
    state: String ,
    zip: String ,
    street: String ,
    city: String ,
    state: String ,
    zip: String ,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports =mongoose.model('UserData',UserSchema);