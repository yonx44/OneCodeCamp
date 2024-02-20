// // Import necessary modules
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// // Middlewares
// app.use(express.json());

// // Routes
// app.use("/api/posts", require("./src/routes/post"));

// mongoose.connect(
//     `mongodb+srv://${process.env.sanderlawrence}:${process.env.ze27tY0bW1HQcaHQ}@cluster0.2hvs0r7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, 
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     app.listen(4000, () => {
//       console.log(`Listening on port 4000 and connected to MongoDB`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//   });


// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set up Express app
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/thunderbox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Middlewares
app.use(bodyParser.json());

// Routes

// Create
app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
app.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});