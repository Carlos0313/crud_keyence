const { Schema, model } = require('mongoose');

// Collecion de datos 
const PunchSchema = new Schema({
    user_id: {
        type:String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    date: Date,
    punch_in: String,
    punch_out: String,
    activo:{
        type: Boolean,
        default: true
    },
    created: { type: Date, default: Date.now },
});

// Exportamos el modelo Punch
module.exports = model('Punch', PunchSchema);