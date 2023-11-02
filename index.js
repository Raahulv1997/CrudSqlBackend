const express= require('express')
const app= express();
const bodyParser=require("body-parser");
const cors= require("cors");
const mysql= require('mysql2')

const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Rahul@we2code",
    database:"crud_contact"
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/get',(req,res)=>{
const sqlGet="SELECT * FROM contact_db"
db.query(sqlGet,(err,result1)=>{
res.send(result1)
})
})

app.get("/",(req,res)=>{
    const sqlInsert= "INSERT INTO contact_db (name, email,contact) VALUES('rahul kumar','rahulkumar@gmail.com','123456990')"
    db.query(sqlInsert,(err, result)=>{
        console.log("error--",err)
        console.log('result--',result)
        res.send("hello express")
    })
   

})
app.listen(5000,()=>{console.log('server is running at port 5000')})