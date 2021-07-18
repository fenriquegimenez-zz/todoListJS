const { Schema, model } = require("mongoose")

const TodoSchema = Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = model("Todo", TodoSchema)
