// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   para.textContent = 'Output: ';
//   const num = input.value;
//   input.value = '';
//   input.focus();
  
//   if (isNaN(num)) {
//     para.textContent += 'Please enter a valid number'
//     para.style.color = 'red'
//   }

//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }
//     para.textContent += `${i} `;
//   }
// })



// Don't mind this line of code i am just practicing the while loop
// noting important about this line of code!
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called';

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
     myFavoriteCats += `${cats[i]}. `;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  
  i++;
}

console.log(myFavoriteCats);