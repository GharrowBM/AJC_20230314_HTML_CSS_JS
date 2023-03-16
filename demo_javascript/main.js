
// Pour créer une variable en JAvascript, il faut utiliser soit le mot-clé 'var', soit 'let'. Si l'on veut réaliser une constante, on utilise le mot-clé 'const'

/*
  En Javascript, les variables ne sont pas typées, c'est à dire qu'il est possible derrière une même variable d'avoir du texte, des chiffres, des objets, voire même des fonctions. Cette flexibilité nous entraine à être prudent lorsqu'il s'agit de nommer nos éléments. 
*/
let monTexte = "Blabla"
const monTexteB = "Titi"
// monTexteB = 25 impossible car c'est une CONSTANTE

console.log(monTexte)

let monNombreEntier = 25
let monNombreAVirgule = 3.14

let monBooleen = false

let maChaineDeCaractere = "Mon texte"
let maChainneDeCaractB = 'Mon texte'

let monNombreA = 25
let monNombreB = 3

let monOperation = `Le résultat de l'opération ${monNombreA} * ${monNombreB} = ${monNombreA * monNombreB}`

// LEs chaines de caractères interpolées en JAvascript sont possible via l'utilisation des backticks ' ` ' qui doivent servir de délimitant entre les bords de notre chaine de caractère. A partir du moment où l'on est en train d'écrire une chaine de caractère interpolée, il est possible d'utiliser la notation '${}' pour pouvoir placer des valeurs variables dans notre chaine de caractère. Ce qui sera placé entre les accolades sera remplacé par la valeur dans la RAM ou le résultat de l'opération avant l'affichage et / ou le stockage de la chaine de caractère

// En Java classique, l'équivalent aurait pu être cette méthode de string :
// "L'oparation de %d * %d vaut %d".format(varA, varB, varA * varB)

console.log(monOperation)

// Les opérateurs arithmétiques classiques

console.log(`1 + 1 = ${1 + 1}`)
console.log(`4 - 1 = ${4 - 1}`)
console.log(`10 * 2 = ${10 * 2}`)
console.log(`10 / 3 = ${10 / 3}`)
console.log(`10 % 3 = ${10 % 3}`)

// LEs copérateurs de comparaison

console.log(`Est-ce que 10 est plus grand que 5 ? ${10 > 5}`);
console.log(`Est-ce que 5 est plus petit que 10 ? ${5 < 10}`);
console.log(`Est-ce que 10 est plus grand ou égal à 5 ? ${10 >= 5}`);
console.log(`Est-ce que 10 est plus petit ou égal à 5 ? ${10 <= 5}`);
console.log(`Est-ce que 10 est différent de 5 ? ${10 != 5}`);
console.log(`Est-ce que 10 est différent de '10' en prenant en compte le typage ? ${10 !== '10'}`);
console.log(`Est-ce que 10 vaut '10' ? ${10 == '10'}`);
console.log(`Est-ce que 10 vaut '10' en prenant en compte le typage ? ${10 === '10'}`);

// Les opérateurs logique 

let age = 21
let carteBibli = false

console.log(`Est ce que Sarah est majeure et possède une carte de bibliothèque? ${age >= 18 && carteBibli}`);
console.log(`Est ce que Sarah est majeure ou possède une carte de bibliothèque? ${age >= 18 || carteBibli}`);
console.log(`Est ce que Sarah est majeure et ne possède pas une carte de bibliothèque? ${age >= 18 && !carteBibli}`);

// LEs Falsy & Truthy values 

/*
  En Javascript, il existe des valeurs qui si on les évalue dans le cadre d'une opération booléenne, sont évaluées à vrai ou à faux. 

  - Les valeurs évaluées à 'faux' sont : 0, une chaine de caractère vide, un objet vide, 'null', 'undefined'
  - Les valeurs évaluées à 'vrai' sont les valeurs numériques, une chaine de caractère, un objet ayant des attributs, un tableau
*/

let maVariableB // Sa valeur par défaut est 'undefined'

console.log(`Est-ce que 25 est truthy ? ${!!25}`); // 25 est truthy => !25 vaut false car de base 25 était truthy => !!25 vaut true car l'inverse de false c'est true
console.log(`Est-ce que 0 est truthy ? ${!!0}`);
console.log(`Est-ce que "" est truthy ? ${!!''}`);
console.log(`Est-ce que "blabla" est truthy ? ${!!'blabla'}`);
console.log(`Est-ce que undefined est truthy ? ${!!undefined}`);

// Les conditions 

/* 
  ON possède deux structures de contrôle en JAvascript.

  La Structure IF...ELSE IF...ELSE qui permet de créer X embranchement, chaque embranchement étant testé l'un après l'autre jusqu'à ce que l'un d'entre eux soit évalué à true, puis les autres sont ignorés. Dans le cas où aucun embranchement n'est truthy, alors on va passer dans l'embranchement 'else'

  Le switch - case qui permet de tester l'égalité d'une valeur de type variable et de générer un cas de figure pour cette valeur en particulier.
*/

if (age >= 21) {
  console.log("Sarah est majeure aux USA");
} else if (age >= 18) {
  console.log("Sarah est majeure en France");
} else {
  console.log("Sarah est mineure");
}

switch (age) {
  case 21:
    console.log("Sarah a 21 ans");
    break;
  case 18:
    console.log("Sarah a 18 ans");
    break;
  default:
    console.log("Sarah a un âge qui n'est pas répertorié...");
    break;
}

// Les boucles

let monIterateurA = 10

while(monIterateurA > 0) {
  console.log(monIterateurA);
  monIterateurA--;
}

for (let i = 0; i < 10; i++) {
  console.log(`i vaut ${i}`);
}

// Pour faire une factorielle

let result = 1
for (let i = 6; i > 0; i--) {
  result*= i
}

console.log(`6! = ${result}`);

// Les tableaux

let monTableauVide = []
let mesNombres = [1, 2, 3, 4, 5]
let mesPRenoms = ['Marc', "Albert", `Cécile`]
let mesElements = [14, 'Elliot', false, [1, 2, 3]]

console.log(mesElements);


console.log(mesNombres);
mesNombres.push(10) // Pour ajouter un élément à la fin d'un tableau
console.log(mesNombres);
mesNombres.unshift(20) // Pour ajouter un élément au début d'un tableau
console.log(mesNombres);
mesNombres.pop() // Pour supprimer un élément à la fin d'un tableau
console.log(mesNombres);
mesNombres.shift() // Pour supprimer un élément au début d'un tableau
console.log(mesNombres);

console.log(`Quel est l'indice de 4 dans le tableau 'mesNombres'? ${mesNombres.indexOf(85)}`);

/*
  Pour itérer dans un tableau, on peut se servir d'une boucle de type FOR...OF... qui permet de parcourir un à un les éléments d'un tableau et de les stocker dans une variable dont on défini le nom. La boucle se stoppera automatiquement une fois la fin du tableau atteinte
*/

// En Java classique, son équivalent est la structure suivante: 
// for (int nb : mesNombres) { ... }

for (const value of mesNombres) {
  console.log(value);
}


// Les fonctions 

function addition(nbA, nbB) {
  return nbA + nbB
}

const multiplication = (nbA, nbB) => nbA * nbB

const division = (nbA, nbB) => {
  if (nbB != 0) {
    return nbA / nbB
  } else return false
} 

console.log(`Le résultat de 4 + 2 = ${addition(4, 2)}`);
console.log(`Le résultat de 4 * 2 = ${multiplication(4, 2)}`);
console.log(`Le résultat de 4 / 2 = ${division(4, 2)}`);
console.log(`Le résultat de 4 / 0 = ${division(4, )}`);

// Les intéraction avec l'utilisateur (dans le cadre d'un navigateur web)


/* 
  Pour récupérer una valeur utilisateur, on va devoir utiliser le 'prompt', qui 
  va permettre à l'utilisateur d'entrer un texte en réponse à une question (un prompt) que l'on choisira.

*/
let monPRenom = prompt('Veuillez me donner votre prénom')

console.log(`Bonjour ${monPRenom}`);
console.log(typeof monPRenom);

// Pour obtenir la version numérique d'une variable textuelle, il est possible de préfixer un retour de fonction, un affichage de variable, etc... du caractère '+'. L'uatre solution, plus longue mais plus prudente, est d'utiliser la fonction parseInt(), ou parseFloat() si l'on voulait un nombre à virgule

let monAge = prompt("Veuillez donner votre âge")
let monAgeEnNombre = +monAge;
let monAgeEnNombreB = parseInt(monAge);

console.log(`Vous avez ${monAgeEnNombre} ans`);
console.log(typeof monAgeEnNombre);

/*
  Si ce que l'on veut récupérer vis à vis de l'utilisateur est un booléen, alors on peut le faire via l'utilisation de la fonction confirm(). Comme le prompt, cette fonction va générer une boite de dialogue dans notre navigateur, mais proposera simplement un choix de type Vrai / Faux
*/

let monResultatBooleen = confirm('Etes-vous sur de vouloir quitter ?')

if (monResultatBooleen) {
  console.log("Au revoir");
} else {
  console.log("On continue");
}

/*
  Si l'on souhaite désoormais présenter à l'utilisateur des données issues de notre JAvascript, la méthode la plus simple est l'utilisation de la boite de dialogue classique, l'alert. Cette boite de dialogue ne permet pas de choix de type oui / non, ni dd'entrer du texte, mais elle permet d'afficher du contenu textuel à l'utilisateur
*/

alert(`Bonjour ${monPRenom}, vous avez ${monAgeEnNombre} ans et ${monResultatBooleen ? 'vous souhaitez partir...' : 'vous souhaitez rester...'}`)