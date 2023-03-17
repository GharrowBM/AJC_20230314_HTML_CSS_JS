const piEl = document.getElementById('pi')
const diamEl = document.getElementById('diam')
const perimEl = document.getElementById('perim')
const aireEl = document.getElementById('aire')
const perimArrondiEl = document.getElementById('perim-a')
const aireArrondiEl = document.getElementById('aire-a')

piEl.textContent = Math.PI

const rayon = +prompt("Veuillez donner le rayon du cercle")

diamEl.textContent = `${rayon * 2}cm`
perimEl.textContent = `${rayon * 2 * Math.PI}cm`
aireEl.textContent = `${rayon * rayon * Math.PI}cm²`
perimArrondiEl.textContent = `${Math.round(rayon * 2 * Math.PI * 100) / 100}cm`
aireArrondiEl.textContent = `${Math.round(rayon * rayon * Math.PI * 100) / 100}cm²`