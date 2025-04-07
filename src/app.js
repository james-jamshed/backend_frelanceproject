const express = require('express');

const connectDB = require("./config/database");

const app = express();


// app.use(express.json()); 
// const studentRoutes = require("./routes/student");
// const adminRoutes = require("./routes/admin");
// const adminViewRoutes = require("./routes/adminview");

// app.use("/api/students", studentRoutes);     // GET student result by rollNo + DOB (student side)
// app.use("/api/admin", adminRoutes);          // Admin: Add student
// app.use("/api/adminview", adminViewRoutes);  // Admin: See all students



connectDB()
    .then(() => {
        console.log("Database connection establised......");
        app.listen(3000, () => {
            console.log("server is successfully listen on port 3000........ ");
            
        });
    
    
    }).catch(err => {
        console.error("Database cannot be connected");
    
    });

