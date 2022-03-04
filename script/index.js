const kmDaPercorrere = parseInt(prompt("Ciao, quanti Km deve percorrere?"));

const età = parseInt(prompt("Quanti anni hai?"));

const prezzoAlkm = (0.21);

let prezzoBiglietto = parseFloat(kmDaPercorrere * prezzoAlkm).toFixed(2);



const scontoUnder18 = (prezzoBiglietto * 20 / 100);
const scontoOver65 = (prezzoBiglietto * 40 / 100);

if (età <= 18) {
    let prezzoUnder18 = ((prezzoBiglietto - scontoUnder18).toFixed(2) + " €");
    document.getElementById("prezzo18").innerText = prezzoUnder18;
} else if (età >= 65) {
    let prezzoOver65 = ((prezzoBiglietto - scontoOver65).toFixed(2) + " €");
    document.getElementById("prezzo65").innerText = prezzoOver65;
}
else {
    document.getElementById("prezzopieno").innerText = (prezzoBiglietto + " €");
}