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
      return { task: task.task, id: task._id }
    })
    return tasksNames
  } catch (error) {
    console.log(error)
    throw new Error("There was an error")
  }
}
const getById = async id => {
  try {
    const task = await Todo.find({ _id: id })
    return { task: task }
  } catch (error) {
    console.log(error)
    throw new Error("There was an error")
  }
}
const deleteTask = async id => {
  try {
    await Todo.deleteOne({ _id: id })
  } catch (error) {
    throw new Error("There was an error")
  }
}
const updateTask = async id => {
  try {
    const task = await Todo.findOne({ _id: id })
    task.completed = !task.completed
    task.save()
  } catch (error) {
    console.log(error)
    return "There was an error"
  }
}
module.exports = { create, getAll, getById, deleteTask, updateTask }
