'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    //outputs vowels
    for(var i = 0;i< s.length;i++)
    {
        if(vowels.indexOf(s.charAt(i))>-1)
        {
            console.log(s[i]);
        }
    }
    
    //output consonants
    for(var i = 0 ; i < s.length; i++ )
    {
        if(vowels.indexOf(s.charAt(i))<0)
        {
            console.log(s[i]);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}