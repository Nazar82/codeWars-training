//http://www.codewars.com/kata/decompose-single-strand-dna-into-3-reading-frames/train/javascript

var decomposeSingleStrand = function(singleStrand) {
    let fr1 = singleStrand.match(/\w{3}/g).join(' ');
    let fr2 = singleStrand.slice(0, 1) + ' ';
    let fr3 = singleStrand.slice(0, 2) + ' ';;
    fr2 += singleStrand.slice(1).match(/\w{1,3}/g).join(' ');
    fr3 += singleStrand.slice(2).match(/\w{1,3}/g).join(' ')
    return `Frame 1: ${fr1}\nFrame 2: ${fr2}\nFrame 3: ${fr3}`;
}
