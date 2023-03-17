const nombresA = document.getElementsByClassName('nbA')
const nombresB = document.getElementsByClassName('nbB')
const resultat = document.getElementById('resultat')

const nbA = +prompt("Veuillez entrer le nombre A")
const nbB = +prompt("Veuillez entrer le nombre B")

for (const element of nombresA) {
  element.textContent = nbA
}

for (const element of nombresB) element.textContent = nbB

resultat.textContent = nbA + nbB