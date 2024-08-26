const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    googleId: {
        default: null,
        type:String
    },
    name: String,
    password: String,
    email:{
       type:String,
       unique:true 
    },
    free_trail_count:{
        default: 3, // edit
        type: Number
    },
    subscription_Type:{
        type:String,
        default: "Free", //Free, Monthly, Yearly
    },
    subscription_Mode:{
        type:Boolean,
        default: false,
    },

});

module.exports = mongoose.model('User', userSchema);