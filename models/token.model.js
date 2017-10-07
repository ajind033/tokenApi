var mongoose = require ("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require("mongoose-auto-increment");

var connection = mongoose.createConnection('mongodb://demo:demopass@ds157964.mlab.com:57964/mydatabase', { useMongoClient: true });

autoIncrement.initialize(connection);

var tokenSchema = new Schema ({
    tokno:{
        type: Number
    },
    acno: {
        type: Number,
        required:true
    },
    reason:{
        type : String
    } 
    
});

tokenSchema.plugin(autoIncrement.plugin, { model: 'token', field: 'tokno' });
var token = connection.model('token', tokenSchema);

// Export Model

module.exports = mongoose.model("token",tokenSchema);