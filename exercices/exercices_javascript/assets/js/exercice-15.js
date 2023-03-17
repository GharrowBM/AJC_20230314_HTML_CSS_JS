const resultEl = document.getElementById('result')

const taille = +prompt("Votre taille (en CM)")
const poids = +prompt("Votre poids (en KG)")

if (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ||
  taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 ||
  taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 ||
  taille >= 145 && taille < 163 && poids >= 60 && poids <= 65) {
  resultEl.textContent = "1";
}
else if (taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
  taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
  taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
  taille >= 160 && taille < 172 && poids >= 66 && poids <= 71) {
  resultEl.textContent = "2";
  }
  else if (taille >= 178 && taille <= 183 && poids >= 54 && poids <= 59 ||
    taille >= 175 && taille <= 183 && poids >= 60 && poids <= 65 ||
    taille >= 172 && taille <= 183 && poids >= 66 && poids <= 71 ||
    taille >= 163 && taille <= 183 && poids >= 72 && poids <= 77) {
  resultEl.textContent = "3";
}
else {
  resultEl.textContent = "N/A";
}

switch (true) {
  case (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ):
  case (taille >= 145 && taille < 169 && poids >= 48 && poids <= 53):
    resultEl.textContent = "1"
    break;

  
}

