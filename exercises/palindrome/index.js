// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, idx) => {
      return char === str[str.length  - idx - 1]
  })
    
}


//function palindrome(str) {
//    var kata = ''
//    var asd =    str.split('').reduce((rev, char)=> char + rev, '')
//    
//   return asd === str;
//    
//    
//}

palindrome("Hello")

module.exports = palindrome;
