const express=require('express')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World from Bangladesh")
})

const friends=[
    {id:1,name:"Moon",email:"moon@gmail.com"},
    {id:2,name:"Avik",email:"avik@gmail.com"},
    {id:3,name:"Jubayer",email:"jubayer@gmail.com"},

]

app.get('/friends',(req,res)=>{
    res.send(friends)
})

app.get('/friends/:id',(req,res)=>{
    const id=parseInt(req.params.id);
   const friend= friends.find(friend=>friend.id===id)
   res.send(friend)
})

app.post('/friends',(req,res)=>{
    console.log('post server connected',req.body)
    const newFriend=req.body;
    newFriend.id =friends.length+1
    friends.push(newFriend)
    res.send(newFriend)
})


app.listen(port,()=>{
    console.log(`My server is running on port ${port}`)
})