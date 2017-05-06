var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/quotes');

var schema = new Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true}
});

module.exports = mongoose.model('Quote', schema);
