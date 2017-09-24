 //http://www.codewars.com/kata/the-fools-day-1/train/javascript
 //This code does not work for all test cases. I think it's because of caution in the instructions to this kata
 
function newsIsFalse(news) {

const fixedNews = news.replace(/[^abigl]/g, ``);

let re = /\w*a\w*b\w*i\w*g\w*a\w*i\w*l\w*/;
  
return re.test(fixedNews) ? `YES`: `NO`;
      
}
