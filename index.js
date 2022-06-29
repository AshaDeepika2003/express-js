var express = require('express');
var router = express.Router();
var mysql=require('../database/Db');

/* GET home page. */
router.get('/', function(req, res,next) {
  //res.sendFile(path.resolve("./public/form.html"));
  res.render('index', { title: 'System works on java script ' });
});



/*router.get('/java', (req, res)=> {
  res.render('index', { title: 'Embedded java script ' });
});*/

/*router.post('/loginsubmit', function(req, res,next) {
  var output=
  res.render('index', { title: 'System works on java script ' });
});*/


// router.get('/fbposts', (req, res)=> {

//   var posts=[
//     {title:"HBD",message:"Happy Birthday to you"},
//     {title:"Casual",message:"Hello how are  you"},
//     {title:"Announcements",message:"Prime Minister is going to vist Bhimavaram"},
//     {title:"greeting",message:"Greetings every one"},
//     {title:"event",message:"Half saree event"},
//   ]
//   res.render('index', { title: 'Facebook posts' ,posts:posts});
// });




// router.get('/selectqry', (req, res)=> {
 

// mysql.getConnection((err, connection) => {

// if(err) throw err;

// connection.query('select * from student limit 2', (err, rows)=> {

// connection.release();

// if(err) throw err;

// res.render('index', {rows:rows});

// //res.send(rows);

// });

// });
// });



router.get('/loginsubmit', function(req, res) {
  res.sendFile(path.resolve("./public/form.html"));
});

router.post('/loginsubmit',function(req, res){ 
  var output=req.body.roll_no;
  mysql.getConnection((err, connection) => {

    if(err) throw err;
    
    connection.query('select * from student limit 2', (err, rows)=> {
    
    connection.release();
    
    if(err) throw err;
    
    res.render('index', {rows:rows});
    
    //res.send(rows);
    
    });
    
    });
    });
    
    
    






module.exports = router;
