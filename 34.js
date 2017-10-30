// https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript


function toCamelCase(str){
    return str.replace(/[-_]\w/g, match => match.slice(1).toUpperCase() );
}