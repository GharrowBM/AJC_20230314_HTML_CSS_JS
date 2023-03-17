const motSaisiEl = document.getElementById('mot-saisi')
const motInverseEl = document.getElementById('mot-inverse')
const resultatEl = document.getElementById('resultat')

const mot = prompt("Veuillez entrer un mot")

motSaisiEl.textContent = mot

const motInverse = mot.split('').reverse().join('')
// 'Kayak' => ['K', 'a', 'y', 'a', 'k'] => ['k', 'a', 'y', 'a', 'K'] => 'kayaK'

motInverseEl.textContent = motInverse

if (motInverse.toLowerCase() === mot.toLowerCase()) {
  resultatEl.innerHTML = `Le mot <b>${mot}</b> est un palindrome`
} else {
  resultatEl.innerHTML = `Le mot <b>${mot}</b> n'est pas un palindrome`
}