// https://www.codewars.com/kata/monkey-talk/train/javascript

function monkeyTalk(phrase) {
    return phrase.split(' ').map((el, ind) => /[oaiue]/i.test(el.slice(0, 1)) ? ind === 0 ? 'Eek' : 'eek' : ind === 0 ? 'Ook' : 'ook').join(' ') + '.';
}
