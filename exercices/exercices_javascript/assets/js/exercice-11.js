const lettreEl = document.getElementById('lettre')
const resultEl = document.getElementById('result')

const lettre = prompt("Veuillez entrer une lettre").toUpperCase()

lettreEl.textContent = lettre

const voyelles = ['A', 'E', 'I', 'O', 'U', 'Y']

/*
  const maRegex = /[AEIOUY]/
  console.log(maRegex.test(lettre))
*/

if (voyelles.includes(lettre)) {
  resultEl.textContent = "voyelle"
} else {
  resultEl.textContent = "consonne"
}