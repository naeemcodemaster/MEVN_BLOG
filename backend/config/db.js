const mongoose = require('mongoose');

exports.ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://onlinecodemaster:mynameiskhan@cluster0.3ejrz.mongodb.net/mevn_stack?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected')
}