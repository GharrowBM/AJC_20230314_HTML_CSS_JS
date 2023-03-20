let count = 0

/*
  Pour créer une classe en JAvascript, il nous faut simplement utiliser le mot-clé 'class' qui sera suivi de notre nom de classe. 

  Dans cette classe, on peut définir des propriétés directement dans le constructeur, qui, au vu du typage dynamique du Javascript, possède une syntaxe concise. 

  Il est cependant possible de faire des méthodes comme dans tout autre language prennant en charge la POO
*/

// class myClass {
//   constructor(testA) {
//     this.testA = testA
//   }
// }


// class TodoItem extends myClass{
  class TodoItem {
  constructor(title, description) {
    // super("dsdsd")
    this.id = ++count
    this.title = title
    this.description = description
  }

  printToConsole() {
    console.log(`title: ${this.title}, desc: ${this.description}`);
    
    if (title === "blabla") {
      return 24
    } else {
      return "Blabla"
    }
  }
}

/*
  Pour instancier une variable de type référence et qui contiendra un objet, on peut utiliser le constructeur d'une classe
*/

let monTodo = new TodoItem("Title A", "Desc of Title A")

let monTodoB = {
  id: ++count,
  title: "Title B",
  description: "Desc of Title B"
}

let mesTodos = [monTodo, monTodoB]


mesTodos.push(new TodoItem("Title C", "Desc of Title C"))
mesTodos.push(new TodoItem("Title D", "Desc of Title D"))
mesTodos.push(new TodoItem("Title E", "Desc of Title E"))

console.log(mesTodos);

// const maFunction = (element) => {
//   if (element.title === "Title C") return true
//   else return false 
// }

// console.log(mesTodos.find(maFunction))

console.log(mesTodos.find(e => e.title === "C"));
console.log(mesTodos.find(e => e.title === "Title C"));

mesTodos = mesTodos.filter(e => e.title !== "Title C")

console.log(mesTodos);

const elementFound = mesTodos.find(e => e.title === "Title B")
if (elementFound) {
  mesTodos.splice(mesTodos.indexOf(elementFound), 1)
}

console.log(mesTodos);