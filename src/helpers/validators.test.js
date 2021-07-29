const { idValidator } = require("./validators")

describe("Id validator tests suite", () => {
  test("should return false if the id does not exists", () => {
    const expected = false
    const id = {}
    const result = idValidator(id)
    expect(result).toBe(expected)
  })
  test("should return false if the id key does not exists in the object received", () => {
    const expected = false
    const id = { prueba: "ñalskfja" }
    const result = idValidator(id)
    expect(result).toBe(expected)
  })
  test("should return false if the id is an empty string", () => {
    const expected = false
    const id = { id: "" }
    const result = idValidator(id)
    expect(result).toBe(expected)
  })
  test("should return false if the id is not a string", () => {
    const expected = false
    const id = { id: 12345 }
    const result = idValidator(id)
    expect(result).toBe(expected)
  })
  test("should return true if the id is in a required format", () => {
    const expected = true
    const id = { id: "adsfasdfasdfasdf" }
    const result = idValidator(id)
    expect(result).toBe(expected)
  })
})
