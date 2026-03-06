let nom = " Fatima "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()
if (nomCorrige === "") {
nomCorrige = "Inconnu"
}

let ageNombre = parseInt(age)
let ageStatut = "valide"
if (isNaN(ageNombre) || ageNombre <= 0) {
ageStatut = "invalide"
}

let emailValide = false
let positionArrobase = email.indexOf("@")
if (positionArrobase !== -1 && email.indexOf(".", positionArrobase) !== -1) {
emailValide = true
}

let score = parseInt(scoreJeu)
if (isNaN(score)) {
score = 0
}

let admin = false
if (estAdmin === "true") {
admin = true
}

let connexion = derniereConnexion ?? "Jamais connecté"

let connexions = parseInt(nombreConnexions)
let texteConnexions = connexions === 0 ? "Aucune connexion" : connexions

console.log("===== RAPPORT UTILISATEUR =====")
console.log('nom : "' + nomCorrige + '"')
console.log("age :", ageNombre, "(" + ageStatut + ")")

if (emailValide) {
console.log('email : "' + email + '" (valide)')
} else {
console.log('email : "' + email + '" (invalide : pas de point après @)')
}

console.log("scoreJeu :", score)
console.log("estAdmin :", admin)
console.log('derniereConnexion: "' + connexion + '"')
console.log("nombreConnexions :", texteConnexions)
console.log("================================")
