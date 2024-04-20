var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next){
  var characters =[
               {
                 name: 'Sure',
                 role: 'Student'
               },
               {
                 name: 'Zé Roberto',
                 role: 'Headmaster'
               },
               {
                 name: 'Caveirinha',
                 role: 'Professor'
               },
               {
                 name: 'Wladison',
                 role: 'Student'
               }
             ];
             var subheading = "I teste a empresa Replit";

             res.render('about', {characters: characters, subheading: subheading});
           });



module.exports = router;