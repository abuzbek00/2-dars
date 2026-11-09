const savatcha = [
  { nomi: "Telefon", narxi: 3000000 },
  { nomi: "Noutbuk", narxi: 8000000 },
  { nomi: "Quloqchin", narxi: 500000 }
];


let umumiySumma = 0;

for (let i = 0; i < savatcha.length; i++) {
  umumiySumma = umumiySumma + savatcha[i].narxi;
}

console.log("Umumiy summa:", umumiySumma);