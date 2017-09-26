// https://www.codewars.com/kata/consonant-value/train/javascript

function solve(s) {
    return s.match(/[^aeiou]+/g).map( i => i.split("") ).map( i => i.map( i => i.charCodeAt() - 96 ).reduce( (a,b) => a + b ) ).reduce( (a,b) => a > b ? a: b ); 
}

/*

While solving this kata, I came up against an interisting case. Reduce method below reduces array with 2 items but fails with more than 2. Why is it so?

function solve(s) {
    
    let arr1 = ["a", "g"];
    let arr2 = ["a", "g", "o"];
  
return arr1.reduce( (a,b) => a.charCodeAt() + b.charCodeAt() ); 
return arr2.reduce( (a,b) => a.charCodeAt() + b.charCodeAt() ); 
 

}


*/