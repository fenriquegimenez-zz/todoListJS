const Todo = require("./schema")

const create = todo => {
  const todoCreated = new Todo(todo)
  try {
    todoCreated.save()
  } catch (error) {
    console.log(error)
    return { error: "There was an error" }
  }
  return {
    msg: "Todo created succesfully",
    todoCreated,
  }
}
const getAll = async () => {
  try {
    const tasks = await Todo.find({})
    const tasksNames = tasks.map(task => {
      return task.task
    })
    return tasksNames
  } catch (error) {
    console.log(error)
    return "There was an error"
  }
}

module.exports = { create, getAll }
