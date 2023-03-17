let monTexte = ""

/*
  Pour sélectionner des éléments de l'HTML via le Javascript, il existe plusieurs méthodes disponibles derrière l'objet 'document' (lequel sert à capturer notre page Web dans son intégralité):

  - getElementById() qui va permettre de sélectionner un élément par son ID (d'où la nécessité que l'ID soit unique)
  - getElementsByClassName() qui va retourner une liste d'éléments correspondant à la sélection demandée

  - querySelector() pour pouvoir sélectionner un élément en se basant sur plusieurs particularités comme sa classe, son id, sa balise, etc...
  - querySelectorAll() pour sélectionner plusieurs éléments  en se basant sur les mêmes critères que le querySelector classique.
*/

const monSpan = document.getElementById("span-a-changer")
const mesLi = document.getElementsByClassName("li-a-changer")

const liSpecial = document.querySelector("li.li-a-changer#li-b")
const mesLiB = document.querySelectorAll("li.li-a-changer")

monSpan.textContent = "J'ai changé !"

for (const titi of mesLi) {
  titi.textContent = "J'ai changé!"
}

mesLi[2].textContent = "Je suis différent"
liSpecial.textContent = "Je suis spécial"

for (const element of mesLiB) {
  element.textContent = "J'ai changé à nouveau"
}

const monButton = document.getElementById("btn-changement")

const direBonjour = () => {
  console.log("Bonjour")
  liSpecial.textContent = monTexte
} 

/*
  Poue pouvoir permettre à l'utilisateur de manipuler le site web et lui apporter réactivité, le Javascript se base sur l'écoute des évènements renvoyé par le navigateur.

  De base, chaque action de l'utilisateur dans la page génère des évènements. Cette fonctionalité est encodé dans le navigateur. Ce que le Javascript doit faire, c'est simplement d'écouter la levée de ces évènements pour pouvoir y apporter des fonctionnalités au moment de leur déclenchement. 

  Ici, nous allons écouter le clic sur un bouton par l'utilisateur. 

  Pour ajouter un écouteur d'évènement, on passer par la méthode .addEventListener() qui prend deux paramètres :
  - Le nom de l'évènement
  - Une fonction qui va servir à définir ce qu'il se passera lors de l'évènement
*/

monButton.addEventListener('click', direBonjour)

const inputA = document.getElementById("input-a")

inputA.addEventListener('input', (event) => {
  monTexte = event.target.value
})

/*
  Si l'on veut désormais pouvoir afficher dans notre page plusieurs éléments suite à l'utilisation du Javascript, il va falloir utiliser l'attribut .innerHTML desd éléments sélectionnés. A la différence de .textContent, la propriété .innerHTML permet d'entrer réellement de l'HTML et que celui-ci soit prix en compte par le navigateur / le JS avant le rendu. 

  Par exemple, si l'on veut pouvoir afficher des éléments d'un tableau via le JS, il est possible de le faire de deux façons:

  - On peut tout faire via l'utilisation de la propriété .innerHTML directement en tapant le nom des balises, leurs attributs et autre

  - On peut utiliser les méthodes du Javascript pour créer des éléments dans le DOM puis les placer à l'endroit voulu via les méthodes .createElement() et .appendChild()
*/

const mesFruits = ['Pomme', 'Fraise', 'Poire']

const mesFruitsUL = document.getElementById("mes-fruits")

mesFruitsUL.innerHTML = "<li>Ici, ce sera mes fruits</li>"

const refreshFruitsTextual = () => {
  /*
    Dans ce premier cas, on va donc réinitiaaliser le contenu de notre balise UL, puis l'on va, pour chaqu'un de nos fruits, concaténer dans l'innerHTML de notre UL la structure d'une balise LI dans laquelle le texte serait le fruit en court d'itération.
  */

  mesFruitsUL.innerHTML = ""
  
  for (const fruit of mesFruits) {
    mesFruitsUL.innerHTML += `<li>${fruit}</li>`
  }
}

const refreshFruitsJSFriendly = () => {
  /*
    Dans cette fonctionnalité, il va falloir de nouveau réinitialiser le contenu HTML de notre UL, puis passer par la méthode .createElement() de notre document. Via cette méthode, on peut créer de nouveau éléments dans notre DOM. Dans les paramètres de la méthode, on doit indiquer le nom de la balise que l'on veut créer.

    Ceci nous permet d'obtenir un élément du DOM dans le Javascript, que l'on peut stocker dans une variable pour pouvoir ensuite changer son .textContent et si on le veut lui brancher des évènemenbts.

    Pour l'ajouter réellement au contenu de notre UL, il va nous falloir utiliser .appendChild() de sorte à placer cet élément du DOM à la fin de notre UL
  */
  mesFruitsUL.innerHTML = ""

  for (const fruit of mesFruits) {
    const nouveauLi = document.createElement('li')
    nouveauLi.textContent = fruit
    nouveauLi.addEventListener('click', () => {
      console.log(`J'ai cliqué sur ${fruit}`);
    })
    mesFruitsUL.appendChild(nouveauLi)

  }

}

const refreshBtnA = document.getElementById("refresh-fruits-a")
const refreshBtnB = document.getElementById("refresh-fruits-b")

refreshBtnA.addEventListener('click', refreshFruitsTextual)
refreshBtnB.addEventListener('click', refreshFruitsJSFriendly)