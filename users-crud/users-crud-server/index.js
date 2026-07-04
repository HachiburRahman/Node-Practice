const express=require('express')
const {MongoClient,ServerApiVersion}=require('mongodb')
const cors=require('cors')
const app=express();
const port =process.env.PORT || 3000

const uri='mongodb+srv://simpleUserDB:MyPassword123@cluster0.44eko0u.mongodb.net/?appName=Cluster0'

app.use(cors())
app.use(express.json());


const client=new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})

 async function run() {
     try{
       await client.connect();

        const users1DB=client.db('users1DB')
        const userCollection=users1DB.collection('users1')

        app.get('/users', async(req,res)=>{
            const cursor=userCollection.find();
            const result= await cursor.toArray();
            res.send(result)
        })

        app.post('/users',async(req,res)=>{
            const user=req.body;
            // console.log(user)
            const result= await userCollection.insertOne(user)
            res.send(result)
        })

        client.db('admin').command({ping:1})
        console.log("Mongodb successfully connected")
     }
     finally{

     }
 }

 run().catch(console.dir)

app.listen(port,()=>{
    console.log(`My server is running on  port${port}`)
})