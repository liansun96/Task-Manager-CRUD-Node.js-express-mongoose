const mongoose = require("mongoose");

const TaskSechema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "must porvide name"],
    trim: true,
    maxLength: [20, "name must be under 20 characters"],
  },
  completed:{
    type : Boolean,
    default : false,
  },
});

module.exports = mongoose.model("Task", TaskSechema);
