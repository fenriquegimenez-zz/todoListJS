const todoValidator = todo => {
  //Checks if the request is valid

  const emptyTaskRequest = Object.entries(todo).length === 0
  const includesTask = todo.hasOwnProperty("task")
  const emptyTask = todo.task === ""
  const taskIsString = typeof todo.task === "string"

  const validRequest =
    !emptyTaskRequest && includesTask && !emptyTask && taskIsString

  return validRequest
}

module.exports = { todoValidator }
