const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("Hello World from Bangladesh .Today Brazil won against Japan about 2-1")
})

app.listen(port,()=>{
    console.log(`Server is runnig on ${port}`)
})