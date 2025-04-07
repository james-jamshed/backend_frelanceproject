const mongoose = require('mongoose'); 

const connectDB = async () => {
   await mongoose.connect("mongodb+srv://vaishnavisolution456:wriV3n1HTbVWnTJf@admindata.j6ik0yw.mongodb.net/?retryWrites=true&w=majority&appName=AdminData");
};
module.exports = connectDB;


