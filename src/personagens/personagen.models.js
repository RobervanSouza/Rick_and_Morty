 const mongoose = require('mongoose');

 const personagenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
 });

 const personagen = mongoose.model('personagen', personagenSchema);

module.exports = personagen;

