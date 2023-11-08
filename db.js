const { response } = require('express');
const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://rahulmendon42:rahulmendon4@cluster42.knf1om4.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then((response) => {
    console.log("connect Mendon");

})
.catch((error) => {
    console.log;(error);
})
