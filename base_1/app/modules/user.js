var mongoose = require('mongoose');
const { Schema } = mongoose;


  var UserSchema = new Schema({
      firstname : {type: String, lowercase: true },
      lastname : {type: String, lowercase: true},
      username: {type: String, lowercase: true, required: true },
      password: {type: String, required: true},
      email: {type: String, required: true, lowercase: true}
  });

module.exports = mongoose.model('User', UserSchema);