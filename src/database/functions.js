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

module.exports = { create }
