const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    googleId : {
        type : String,
        required : true
    },

    displayName : {
        type : String,
        required : true
    },


    firstname : {
        type : String,
        requied : true
    },

    lastname : {
        type : String,
        required : true
    },

    image : {
        type : String
    },

    createdAt : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model('ProjectUsers', UserSchema)