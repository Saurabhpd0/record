// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express()
// app.use(cors())

// const db = mysql.createConnection({
//     host : "localhost",
//     user : 'root',
//     password : 'saurabh',
//     database : 'recorddata'
// })

// app.get('/' , (req,res) => {
//     return res.json("response from backend")
// })
// app.get('/records',(req,res)=> {
//     const sql = "SELECT * FROM records";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.listen(3306,()=> {
//     console.log("listening");
// })