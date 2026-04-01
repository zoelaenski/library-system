const mongoose = require("mongoose");
  const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       },

    email:{
        type: String,
        unique: true,
        },

    studentId: {
        type: String,
        unique: true,
        },

    createdAt: {
        type: Date,
        default: Date.now,
        },
       });

       const Student = mongoose.model("Student", studentSchema);
       module.exports = Student;