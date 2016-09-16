var express = require('express');
var router = express.Router();  
var paragraphs  = require('../public/views/Models/AboutMeModel');
var menu = require('../public/views/Models/MenuModel');
var myProjects = require('../public/views/Models/MyProjectsModel');

// Define GET route for AboutMe page
/////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/GetAboutMe')
    .get(function(req, res) {
        paragraphs.find(function(err, result) {
            if (err)
                res.send(err);

            res.json(result);
        });

    });

/////////////////////////////////////////////////////////////////////////////////////////////////

// Define GET route for Menu items
////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/GetMenu')
    .get(function(req, res) {
        menu.find(function(err, result) {
            if (err)
                res.send(err);

            res.json(result);
        });

    });
//////////////////////////////////////////////////////////////////////////////////////////////////

// Define GET route for my companies
/////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/GetCompanies')
    .get(function(req, res) {
        myProjects.find(function(err, result) {
            if (err)
                res.send(err);

            res.json(result);
        });

    });




module.exports = router;
