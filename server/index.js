const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));

const PORT = process.env.PORT || 8080

// MongoDB
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connect to Database"))
.catch((err) => console.log(err))

// Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String,
})

const userModel = mongoose.model("user", userSchema)

// Api
app.get("/", (req, res) => {
    res.send("server is running")
})

// app.post("/signup", (req, res) => {
//     console.log(req.body)
//     const {email} = req.body

//     userModel.findOne({email : email},(err,result) => {
//         console.log(result)
//         console.log(err)
//     })
// })

app.post("/signup", async (req, res) => {
    try {
        console.log(req.body); // log the request body to the console
        const { email } = req.body; // extract the email from the request body using destructuring

        const result = await userModel.findOne({ email: email }).exec();

        if (result) {
            res.send({message: "Email already exist"})
        } else {
            const data = userModel(req.body)
            const save = data.save()
            res.send({ message: "Successfully sign up"})
        }
    } catch (err) {
        console.log(err); // log any errors to the console
        res.status(500).send("Server Error"); // send an error response to the client
    }
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})