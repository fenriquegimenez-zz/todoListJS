const { create, getAll, getById } = require("../database/functions")
const { todoValidator, idValidator } = require("../helpers/validators")

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
const getAllEndpoint = async (req, res) => {
  const tasks = await getAll()
  res.send({ tasks: tasks })
}
const getByIdEndpoint = async (req, res) => {
  try {
    const request = req.body
    console.log(request)
    const validId = idValidator(request)
    if (!validId) {
      throw new Error("Id no válido")
    } else {
      const task = await getById(request.id)
      res.send(task)
    }
  } catch (error) {
    console.log(error)
    res.json({ msg: "Hubo un error, favor verifique su petición" })
  }
}

module.exports = { createEndpoint, getAllEndpoint, getByIdEndpoint }
