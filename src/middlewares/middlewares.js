const { create } = require("../database/functions")
const { todoValidator } = require("../helpers/validators")

const createEndpoint = (req, res) => {
  try {
    const todo = req.body
    console.log("Request received: ", todo)

    // Task validations
    const validRequest = todoValidator(todo)
    if (!validRequest) {
      throw new Error("Invalid request")
    }
    // Saving the task
    const todoCreated = create(todo)
    console.log(todoCreated)
    res.status(201).json({ data: todoCreated })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ msg: "There was an error, please check your request" })
  }
}

module.exports = { createEndpoint }
