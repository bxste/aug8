const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors());

//database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'almario',
    password: 'password123',
    database: 'library',
    port: 3306
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

// //get all data
// app.get('/library', (req, res) => {
//     let sql = "SELECT * FROM library";
//     db.query(sql, function (error, result) {
//         if (err)
//         {
//           console.log(err,'errs');
//         }
//         if (result.length){
//             res.send({
//                 message:'all user data',
//                 data:result
//             });
//           }
        
//         else{
//           res.send({ status: true, data: result })
//         }
//       });
//   });

//get all data
app.get('/library', (req, res) => {
  let sql = "SELECT * FROM library";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//get all data books
app.get('/books', (req, res) => {
  let sql = "SELECT * FROM library.books";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});


//get all data book2
app.get('/bookNovel', (req, res) => {
  let sql = "SELECT * FROM library.bookNovel;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//get all data fantasy
app.get('/bookFantasy', (req, res) => {
  let sql = "SELECT * FROM library.bookFantasy;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//get all data fiction
app.get('/bookFiction', (req, res) => {
  let sql = "SELECT * FROM library.bookFiction;";
  db.query(sql, (err, result)=> {
      if (err)
      {
        console.log(err,'errs');
      }
      if (result.length>0){
          res.send({
              message:'all user data',
              data:result
          });
        }
      
      else{
        res.send({ status: true, data: result })
      }
    });
});

//create
app.post('/library', (req, res) => {
    console.log(req.body,'createdata');

    let stName = req.body.stname;
    let course2 = req.body.course;
    let fee2 = req.body.fee;
    let iD = req.body.id;
    // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;

    // let details = {
    //   stName: req.body.stname,
    //   course2: req.body.course,
    //   fee2: req.body.fee,
    // };
    // let sql = `INSERT INTO library SET ?`
    let sql = `INSERT INTO library.library (id, stname, course, fee) VALUES ('${iD}','${stName}', '${course2}', '${fee2}')`;
    db.query(sql,(err,result)=>{
      if(err){console.log(err);}
      console.log(result,'result')
      if(res.length>0)
      {
        res.send({
          message: 'data inserted'
        });
      }
      else{
        res.send({
          message:'wrong'
        })
      }
    })
  });

  // app.post('/Books', (req, res) => {
  //   console.log(req.body,'createdata');

  //   let bookTitle = req.body.book_title;
  //   let Author2 = req.body.Author;
  //   let book_summary2 = req.body.book_summary;
  //   let book_edition2 = req.body.book_edition;
  //   let book_publisher2 = req.body.book_publisher;
  //   let book_img2 = req.body.book_img;
  //   // let sql = `insert into library (stname,course,fee) VALUES('${stname}','${course}','${fee}')`;

  //   // let details = {
  //   //   stName: req.body.stname,
  //   //   course2: req.body.course,
  //   //   fee2: req.body.fee,
  //   // };
  //   // let sql = `INSERT INTO library SET ?`
  //   let sql = `INSERT INTO library.Books (book_title, Author, book_summary, book_edition, book_publisher, book_img) VALUES ('${bookTitle}','${Author2}', '${book_summary2}', '${book_edition2}', '${book_publisher2}', '${book_img2}')`;
  //   db.query(sql,(err,result)=>{
  //     if(err){console.log(err);}
  //     console.log(result,'result')
  //     if(res.length>0)
  //     {
  //       res.send({
  //         message: 'data inserted'
  //       });
  //     }
  //     else{
  //       res.send({
  //         message:'wrong'
  //       })
  //     }
  //   })
  // });
//update
  app.put('/library/:id', (req, res) => {

    console.log(req.body,'updatedata');
    // let details = {
    //   stname: req.body.stname,
    //   course: req.body.course,
    //   fee: req.body.fee,
    // };
    let stName = req.body.stname;
    let course2 = req.body.course;
    let fee2 = req.body.fee;
    let iD = req.body.id;

    let sql = `UPDATE library.libary set = ${iD}, ${stName}, ${course2}, ${fee2} WHERE id = ${gID}`;

    db.query(sql,(err,result)=>{
      if(err){console.log(err);}
      res.send({
        message:'data updated'
      })
    })
  });

//view

app.get('/library/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = `SELECT * FROM library.library WHERE ID = ${gID}`;

    db.query(qr,(err,result)=>{
      if(err){console.log(err);}

      if(result.length>0){
        res.send({
          message:'get single data',
          data:result
        });
      }
      else{
        res.send({
          message:'data not found'
        })
      }
    })
});

//delete
app.delete('/library/:id',(req,res)=>{
  let gID = req.params.id;
  let qr = `delete from library.library where id = '${gID}'`;
  db.query(qr,(err,result)=>{
    if(err){console.log(err);}
    res.send(
      {
        message:'data deleted'
      }
    )
  })
})

  app.listen(3000, () => {
    console.log(`Server is running `);
  });
