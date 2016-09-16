var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MenuSchema = new Schema({
Name: String,
Sref: String
});

module.exports = mongoose.model('MainMenu', MenuSchema,'MainMenu');