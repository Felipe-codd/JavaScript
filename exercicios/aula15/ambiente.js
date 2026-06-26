let num = [1, 5, 8, 3, 2, 7];
num.sort()

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`);
}*/

for (let pos in num) {
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`);
}