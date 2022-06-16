let word  = "+1 123 456 7890";

let newWord = word.match(/((?<area>\+\d{1,3})[ -])?\(?(?<operator>\d{3})\)?[ -]?(?<main>\d{3})[ -]?(?<number>\d{4})/);

console.log(newWord);