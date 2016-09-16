var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AboutMeSchema = new Schema({
    MainParagraphText: String,
	SecondParagraphText_A: String,
	SecondParagraphText_B: String,
	ThirdParagraphText: String
});

module.exports = mongoose.model('AboutMe', AboutMeSchema,'AboutMe');