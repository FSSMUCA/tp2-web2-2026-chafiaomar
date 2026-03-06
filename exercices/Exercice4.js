let paires = [
[0, ""],
[0, "0"],
[0, false],
["", false],
[null, undefined],
[null, false],
[NaN, NaN],
[1, "1"],
[" \t\n ", 0]
];

let diff = 0;

for (let i = 0; i < paires.length; i++) {
let a = paires[i][0];
let b = paires[i][1];

let eq = (a == b);
let seq = (a === b);

console.log(String(a) + " == " + String(b) + " -> " + eq +
" | " +
String(a) + " === " + String(b) + " -> " + seq);

if (eq === true && seq === false) {
diff++;
}
}

console.log("---");
console.log(diff + " paire(s) où == et === donnent des résultats différents");
