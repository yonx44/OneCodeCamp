const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://sanderlawrence:ze27tY0bW1HQcaHQ@cluster0.2hvs0r7.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            app.listen("4000", () => {
                console.log("Listening port 4000 and conencted to MongoDB");
            });
        })
        .catch((error) => {
            console.log("Error connecting to MongoDB: ", error.message)
        });