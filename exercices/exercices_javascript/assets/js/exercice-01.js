const nomEl = document.getElementById('nom')
const prenomEl = document.getElementById('prenom')
const nomCompletEl = document.getElementById('nom-complet')

const prenom = prompt("Quel est votre prénom ?")
const nom = prompt("Quel est votre nom de famille ?")

console.log("Vous avez saisi " + prenom);
nomEl.textContent = nom
console.log("Vous avez saisi " + nom);
prenomEl.textContent = prenom
console.log("Bonjour " + prenom + " " + nom);
nomCompletEl.textContent = prenom + " " + nom