const mongoose = require('mongoose');

const formSchema  = new mongoose.Schema({
    name : {
        type : String,
        required: true
      },
    nic : {
        type : String,
        required: true
      },
    request : {
        type : String,
        required: true
      }
});

module.exports = mongoose.model('Forms',formSchema);