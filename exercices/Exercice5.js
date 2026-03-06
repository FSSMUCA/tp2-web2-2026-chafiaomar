let nombres = [
0,
NaN,
Infinity,
-Infinity,
42,
3.14,
Number.MAX_SAFE_INTEGER + 1,
-0
];

for (let i = 0; i < nombres.length; i++) {

let v = nombres[i];
let texte = String(v);

if (Number.isNaN(v)) {
console.log(texte + " -> INVALIDE");
}

else if (v === Infinity || v === -Infinity) {
console.log(texte + " -> INFINI");
}

else if (v === 0 && 1 / v === -Infinity) {
console.log("0 -> ZERO NEGATIF");
}

else if (Number.isInteger(v) && Number.isSafeInteger(v)) {
console.log(texte + " -> ENTIER SUR");
}

else if (Number.isInteger(v) && !Number.isSafeInteger(v)) {
console.log(texte + " -> ENTIER HORS LIMITES");
}

else {
console.log(texte + " -> DECIMAL");
}
}
