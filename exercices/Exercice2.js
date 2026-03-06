let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
let v = valeurs[i];

let texte = String(v);

if (v === "") {
texte = "(chaine vide)";
}

if (v) {
console.log(texte + " -> truthy");
} else {
console.log(texte + " -> falsy");
}
}
