const express=require('express')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
     res.send("Hello World from Bangladesh........")
})

const users=[
    {id:1,name:'Hachib',email:'hachib@gmail.com'},
    {id:2,name:'Moon',email:'moon@gmail.com'},
    {id:3,name:'Antu',email:'antu@gmail.com'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('post method',req.body)
    const newUser=req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})