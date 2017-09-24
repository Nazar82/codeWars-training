 //http://www.codewars.com/kata/consecutive-count/train/javascript
 
function getConsectiveItems(items, key){
  let re = new RegExp(`${key}+`, `g`);
  let matchedItems = items.toString().match(re);
  return matchedItems === null ? 0 : matchedItems.sort((a, b) => b.length - a.length)[0].length;
}