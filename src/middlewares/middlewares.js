const { create } = require("../database/functions")

const createEndpoint = (req, res) => {
  try {
    const todo = req.body
    console.log("Request received: ", todo)

    // Task validations
    const emptyTaskRequest = Object.entries(todo).length === 0
    const includesTask = todo.hasOwnProperty("task")
    const emptyTask = todo.task === ""
    const taskIsString = typeof todo.task === "string"
    const validRequest =
      !emptyTaskRequest && includesTask && !emptyTask && taskIsString
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
