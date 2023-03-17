const chaineBaseEl = document.getElementById('chaine-base')
const chaineLowerEl = document.getElementById('chaine-lower')
const chaineArrayEl = document.getElementById('chaine-array')
const chaineResultEl = document.getElementById('chaine-result')

const phrase = prompt("Veuillez entrer une phrase")

chaineBaseEl.textContent = phrase

const phraseLower = phrase.toLowerCase()

chaineLowerEl.textContent = phraseLower

const phraseArray = phraseLower.split("").join(', ')

chaineArrayEl.textContent = phraseArray

const phraseResult = []

for (const mot of phrase.split(" ")) {
  phraseResult.push(mot.substring(0, 1).toUpperCase() + mot.substring(1).toLowerCase())
}

chaineResultEl.textContent = phraseResult.join(" ")