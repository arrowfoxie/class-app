var express = require('express');
var router = express.Router();
var Student = require('../../models/student');

router.get('/', function(req, res) {
  Student.selectAll('students', function(results) {
    res.json(results);
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  //Getting current classes
  Student.findOne('registeredIds', 'students', condition, function(results) {
    var currentIds = results[0].registeredIds;
    var totalIds = currentIds + ',' + req.body.registeredIds;
    console.log(totalIds);
    //Adding new classes
    Student.updateOne(
      'students',
      `registeredIds = '${totalIds}'`,
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return releaseEvents.status(404).end();
        }
        console.log(req.body);
        res.status(200).end();
      }
    );
  });
  console.log(req.body);
  console.log(req.user[0].id);
  // var condition = 'id = ' + req.user[0].id;
});

module.exports = router;
