/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {

  let wl = s.split(' ').filter(w => w.length > 0);

  if (wl.length === 1) return wl[0].length;
  else if (wl.length > 1) return wl[wl.length - 1].length;
  else return 0;
};

// Test Cases
console.log('My new name is Pawan Pandey     ', ' :- ', lengthOfLastWord('My new name is Pawan Pandey     '));
console.log('My new name Samuella ', ' :- ', lengthOfLastWord('My new name Samuella '));
console.log('My new name pawanpandey392', ' :- ', lengthOfLastWord('My new name pawanpandey392'));
console.log('   a', ' :- ', lengthOfLastWord('   a'));
console.log('ssb      ', ' :- ', lengthOfLastWord('ssb      '));
console.log('', ' :- ', lengthOfLastWord(''));
console.log(' ', ' :- ', lengthOfLastWord(' '));