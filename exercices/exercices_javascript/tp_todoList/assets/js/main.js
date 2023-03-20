const resultBody = document.getElementById("result")
const todoEmptyDiv = document.getElementById("todo-empty-div")
const todoTable = document.getElementById("todo-table")
const todoAddForm = document.getElementById("todo-add-form")

let count = 0

const myTodos = []

const refreshContent = () => {
  
  if (myTodos.length === 0) {
    todoEmptyDiv.style.display = "block"
    todoTable.style.display = "none"
    const newParagraph = document.createElement("p")
    newParagraph.textContent = "There is no todo in the todos list!"
    resultDiv.append(newParagraph)
  } else {
    todoEmptyDiv.style.display = "none"
    todoTable.style.display = "table"
    resultBody.innerHTML = ""
    for (const todo of myTodos) {
      const newLineElement = document.createElement("tr")
      for (const key in todo) {
        const tableData = document.createElement("td")
        tableData.textContent = todo[key]
        newLineElement.append(tableData)
      }
      const finalTD = document.createElement('td')
      const deleteButton = document.createElement('button')
      deleteButton.className = "btn btn-danger"
      deleteButton.textContent = "Delete"
      deleteButton.addEventListener('click', () => {
        const foundTodo = myTodos.find(x => x.id === todo.id)
        myTodos.splice(myTodos.indexOf(foundTodo), 1)
        refreshContent()
      })
      finalTD.append(deleteButton)
      newLineElement.append(finalTD)
      resultBody.append(newLineElement)
    }
  }
}

todoAddForm.addEventListener('submit', (e) => {
  e.preventDefault()

  myTodos.push({
    id: ++count, 
    title: document.getElementById("title").value,
    desc: document.getElementById("desc").value,
  })

  refreshContent()
})

refreshContent()