// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const recipeRoutes = require('./routes/recipeRoutes');
// const userRoutes = require('./routes/userRoute');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/v1/recipe', recipeRoutes);
// app.use('/api/v1/user', userRoutes);

// // Connect to database and start server
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to database');
//     const PORT = process.env.PORT || 8081;
//     app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//   })
//   .catch((err) => console.log(err.message));


// require('dotenv').config();

// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

// const MONGODB_URI = process.env.MONGODB_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// async function connect() {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('Error connecting to MongoDB', err);
//   }
// }

// function createToken(payload) {
//   return jwt.sign(payload, JWT_SECRET);
// }





//======================Working code===============================

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const receipeRoutes = require("./routes/recipeRoutes")
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/v1/receipe", receipeRoutes);
app.use("/api/v1/user", userRoutes);




const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'usersDB';
let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB server');
  db = client.db(dbName);
});


// const uri = "mongodb+srv://Pritish:Pritish@cluster0.dw60wkt.mongodb.net/?retryWrites=true&w=majority"

// const uri = "mongodb+srv://Pritish:Pritish@cluster0.dw60wkt.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

const mongooseOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to MongoDB using Mongoose
mongoose.connect(uri, mongooseOption)
  .then(() => {
    // Start the server once the connection is established
    app.listen(8081, () => {
      console.log('Server is Up at PORT : 8081');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

//========================Working code End========================================

// =--------------------------------------
// const express=require('express');
// const mongoose=require('mongoose')
// const cors=require('cors');
// const productRoutes=require("./routes/productRoutes");
// const orderRoutes=require("./routes/orderRoutes");
// const userRoutes=require("./routes/usersRouts");


// const app=express();
// app.use(express.json());
// app.use(cors());


// app.use("/product", productRoutes)
// app.use("/order", orderRoutes)
// app.use("/user", userRoutes)


// mongoose.connect("https://localhost:8081/", {useNewUrlParser:true, useUnifiedTopology:true})
// .then((data)=>{
//    console.log(`Mongo DB Connected :${data.connection.host}`);
// })

// mongoose.set("strictQuery", false);

// app.listen(8081, ()=> {
//     console.log("Server up at Port 4000")
// });

//------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// const PORT = 8081;

// app.use(bodyParser.json());

// // MongoDB setup
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'usersDB';
// let db;



// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Connected to MongoDB server');
//   db = client.db(dbName);
// });

// // Register user
// app.post('/api/v1/user/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   // Validation
//   const errors = {};
//   if (!name) {
//     errors.name = 'Name is required';
//   }
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     errors.email = 'Email is invalid';
//   }
//   if (!password) {
//     errors.password = 'Password is required';
//   } else if (password.length < 6) {
//     errors.password = 'Password must be at least 6 characters long';
//   }

//   if (Object.keys(errors).length > 0) {
//     return res.status(400).json({ errors });
//   }

//   // Check if user exists
//   const existingUser = await db.collection('users').findOne({ email });
//   if (existingUser) {
//     return res.status(401).json({ message: 'User already exists' });
//   }

//   // Create user
//   const newUser = {
//     name,
//     email,
//     password,
//   };
//   await db.collection('users').insertOne(newUser);

//   res.status(201).json({ message: 'User registered successfully' });
// });

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
