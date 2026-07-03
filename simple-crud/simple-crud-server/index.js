const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://simpleUserDB:MyPassword123@cluster0.44eko0u.mongodb.net/?appName=Cluster0&compressors=zlib";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function run() {
  try {
    await client.connect();

    const usersDB = client.db("usersDB");
    const usersCollection = usersDB.collection("users");

    // Get all users
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // Add a user
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      // console.log(newUser);

      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.delete("/users/:id", async(req,res)=>{
      const id=req.params.id;
       const query = {
        _id: new ObjectId(id)
    };
      // console.log(query)
      const result = await usersCollection.deleteOne(query);
      res.send(result)
    })
  
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

run();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});