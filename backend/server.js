require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");

// const authRoutes = require("./routes/authRoutes");

const app = express();

// Routes
// app.use("/api/auth", authRoutes);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

app.get("/", (req, res)=>{
    res.send("Home page")

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
