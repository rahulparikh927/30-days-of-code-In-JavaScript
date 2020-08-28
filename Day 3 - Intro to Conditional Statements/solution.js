'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//If  is odd, print Weird
// If  is even and in the inclusive range of 2 to 5, print Not Weird
// If  is even and in the inclusive range of 6 to 20, print Weird
// If  is even and greater than 20, print Not Weird

function main() {
    const N = parseInt(readLine(), 10);
    let print = '';
    if(N % 2 == 0){
        // even
        if(N >= 2 && N <= 5){
            print = 'Not Weird'
        }
        else if(N >= 6 && N <= 20){
            print = 'Weird'
        }
        else if(N > 20){
            print = 'Not Weird'
        }
    }
    else{
        // odd
        print = 'Weird';
    }
    console.log(print)
}