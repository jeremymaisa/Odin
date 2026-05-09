// function palindrome(text) {
//   let j = text.length - 1;

//   for (let i = 0; i < text.length / 2; i++) {
//     if (text[i] !== text[j]) {
//       return false;
//     }
//     j--
//   }

//   return true;
// }

// console.log(palindrome('madam'));

// function palindrome(str) {
//   let reverse = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }

//   if (reverse !== str) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(palindrome('madam'));

function palindrome(str) {
  let reverse = str.split('').reverse().join('');

  if (reverse !== str) {
    return false;
  }
  return true
}

console.log(palindrome("madam"));

