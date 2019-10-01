// var express = require("express");
// var router = express.Router();
//     //console.log(express)

// var burgers = require("../models/burgers.js");

// router.get("/", function(req, res) {
//     //console.log("Hello World")

// burgers.all(function(data) {
//     console.log(data);
//     var hbsObject = {
//         burgers: data
//     };

//     res.render("index", hbsObject);
// }
// )});

// module.exports = router;

var express = require("express");

var router = express.Router();
('')
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/', function (req, res) {
    burger.insertBurger(
        ['burger_name'],
        [req.body.burger_name],
        function (data) {
          console.log(data);
            res.redirect('/')
     });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log("Controller put",req.body);
    
    burger.updateBurger({
      devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router; 


