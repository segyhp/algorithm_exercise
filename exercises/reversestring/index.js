// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//solutin one
//function reverse(str) {
//    
////   const arra = str.split('');
////    arra.reverse();
////    return arra.join('');
//    
//    return str
//        .split('') 
//        .reverse()
//        .join('')
//}

//solution two
function reverse(str){
    let reversed = '';
    
   for (let chara of str){
       reversed = chara + reversed;
       debugger;
   }
    
    return reversed;
}

//function reverse(str){
//    debugger;
//    return str.split('').reduce((rev, char)=> char + rev, '')
//}


reverse('asdf')


module.exports = reverse;
 