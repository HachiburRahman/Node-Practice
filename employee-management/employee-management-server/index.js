const express=require('express')
const cors=require('cors')
const port=process.env.PORT||5000
const app=express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World from Bangladesh")
})
const employees=[
    {id:1,name:"Manik",email:"manik@gmail.com"},
    {id:2,name:"Rahim",email:"rahim@gmail.com"},
    {id:3,name:"Karim",email:"karim@gmail.com"}
]

app.get('/employees',(req,res)=>{
     res.send(employees)
})

app.get('/employees/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const singleEmploye=employees.find(employee=>employee.id===id)
    res.send(singleEmploye)
})

app.post('/employees',(req,res)=>{
    console.log("post method",req.body);
    const newEmployee=req.body;
    newEmployee.body=employees.length+1;
    employees.push(newEmployee);
    res.send(newEmployee)
})
app.listen(port,()=>{
    console.log(`My server is running on port ${port}`)
})