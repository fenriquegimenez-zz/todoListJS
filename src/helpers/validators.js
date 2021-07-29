const todoValidator = todo => {
  //Checks if the request is valid

  const emptyTaskRequest = Object.entries(todo).length === 0
  const includesTask = todo.hasOwnProperty("task")
  const emptyTask = todo.task === ""
  const isString = typeof todo.task === "string"

  const validRequest =
    !emptyTaskRequest && includesTask && !emptyTask && isString

  return validRequest
}

const idValidator = todo => {
  //Checks if the request is valid

  const includesId = todo.hasOwnProperty("id")
  const emptyId = todo.id === ""
  const isString = typeof todo.id === "string"

  const validRequest = includesId && !emptyId && isString

  return validRequest
}

module.exports = { todoValidator, idValidator }
