var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MyProjectsSchema = new Schema({
CompanyTitle: String,
CompanyLocation: String,
CompanyWorking: String,
Colapse: String,
ColapseClass: String,
LogoPath: String
});

module.exports = mongoose.model('MyProjects', MyProjectsSchema,'MyProjects');