 //http://www.codewars.com/kata/consecutive-count/train/javascript
 
function getConsectiveItems(items, key){
  const re = new RegExp(`${key}+`, 'g');
  const matchedItems = String(items).match(re);
  return matchedItems ? matchedItems.reduce( (a, b) => a > b ? a : b ).length : 0;
}
