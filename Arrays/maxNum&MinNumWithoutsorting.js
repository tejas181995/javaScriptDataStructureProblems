let highest = 99;
let secondHigh = 98;
let lowest = 1001;
let secondLow = 1000;

let numbers = new Array;

for (var i = 0; i < 10; i++) {
    let number = Math.round(Math.random() * 900 + 100);
       numbers.push(number);
}
console.log(numbers);

for (var i = 0; i < 10; i++) {
    if(numbers[i] > highest){
        secondHigh = highest;
        highest = numbers[i];
    }
    else if(numbers[i] > secondHigh){
        secondHigh = numbers[i];
    }

    if(numbers[i] < lowest){
        secondLow = lowest;
        lowest = numbers[i];
    }
    else if(numbers[i] < secondLow){
        secondLow = numbers[i];
    }
}

console.log(`highest ${highest} and second highest ${secondHigh}`);
console.log(`lowest ${lowest} and second lowest ${secondLow}`);