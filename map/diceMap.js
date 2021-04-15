let diceMap = new Map();

diceMap['d1'] = 0;
diceMap['d2'] = 0;
diceMap['d3'] = 0;
diceMap['d4'] = 0;
diceMap['d5'] = 0;
diceMap['d6'] = 0;

let temp;
for (var i = 0; i < 50; i++) {
    temp = Math.round(Math.random() * 5) + 1;

    if (temp == 1)
        diceMap['d1']++;
    else if (temp == 2)
        diceMap['d2']++;
    else if (temp == 3)
        diceMap['d3']++;
    else if (temp == 4)
        diceMap['d4']++;
    else if (temp == 5)
        diceMap['d5']++;
    else if (temp == 6)
        diceMap['d6']++;
}
console.log(diceMap);

let max = 'd1';
for (var key in diceMap){
    if(diceMap[key] > diceMap[max])  b
        max = key;
}

console.log(`maximum times reached dice is dice${max}`);