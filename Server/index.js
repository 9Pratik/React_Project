const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var mysql = require('mysql');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pratik@123",
  database: "Student_Enquery"
});



app.get('/view', (req, res) => {
  const sqlSelect = 'select * from SignUp';
  con.query(sqlSelect, function (error, result) {
    if (error) throw error;
    res.send(JSON.stringify(result));

  });
});

app.post('/insert', (req, res) => {
  const fname = req.body.fname
  const lname = req.body.lname
  const phone = req.body.phone
  const password = req.body.password
  const email = req.body.email

  const sqlInsert = 'INSERT INTO SignUp(fname,lname,phone,email,password)VALUE(?,?,?,?,?)';
  con.query(sqlInsert, [fname,lname, phone, email, password], (error, result) => {
    if (error) throw error;
    res.send(JSON.stringify(result));
    console.log(result);
  })
});

app.delete('/delete', function (req, res, next) {
  const id = req.body.id;
  const sqlDelete = 'delete from SignUp where id = ?';
  con.query(sqlDelete, [id], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

app.get('/edit', (req, res, next) => {

  const fname = req.body.fname
  const lname = req.body.lname
  const phone = req.body.phone
  const password = req.body.password
  const email = req.body.email

  con.query('UPDATE SignUp SET ' + req.body.fname + '', +req.body.lname + '', +req.body.phone + '', +req.body.email +'',+req.body.password + 'WHERE' + req.body.id + '', (error, result) => {

  })
  if (error) throw error;
  res.send(JSON.stringify(results));
});


//Login Form
app.post('/login', (req,res,next)=>{

  const email= req.body.email
  const password=req.body.password
  const sqlInsert='select * from SignUp where email = ? and password = ? '
  con.query(sqlInsert,[email,password],(error,result)=>{
        if(error){
            res.send({error: error})
        }
        if(result.length > 0){
        res.send(JSON.stringify(result));
        }
        else{
        res.send({message:"wrong password"})
        
        }
  })
})


//Data Base For Course Details

app.get('/viewFee', (req, res) => {
  const sqlSelect = 'select * from Fees_Detail';
  con.query(sqlSelect, function (error, result) {
    if (error) throw error;
    res.send(JSON.stringify(result));

  });
});

app.post('/insertFee', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const course = req.body.course
  const message = req.body.message

  const sqlInsert = 'INSERT INTO Fees_Detail(name,email,phone,course,message)VALUE(?,?,?,?,?)';
  con.query(sqlInsert, [name,email,phone,course,message], (error, result) => {
    if (error) throw error;
    res.send(JSON.stringify(result));
    console.log(result);
  })
});


//Data base for Register By Email

app.get('/viewReg', (req, res) => {
  const sqlSelect = 'select * from Reg_Email';
  con.query(sqlSelect, function (error, result) {
    if (error) throw error;
    res.send(JSON.stringify(result));

  });
});

app.post('/insertReg', (req, res) => {
  const email = req.body.email

  const sqlInsert = 'INSERT INTO Reg_Email (email) VALUE (?)';
  con.query(sqlInsert, [email], (error, result) => {
    if (error) throw error;
    res.send(JSON.stringify(result));
    console.log(result);
  })
});


app.get('/', (req, res) => {
  res.send("hello world")
})


app.listen(3004, () => {
  console.log("running at 3004")
})

