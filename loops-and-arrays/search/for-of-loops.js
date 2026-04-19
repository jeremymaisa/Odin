const contacts = [
  'Chris:2223164',
  'Sarah:5556648',
  'Bill:6645222',
  'Mary:45568884',
  'Dianne:9865784'
];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  for (let contact of contacts) {
    const splitContacts = contact.split(':');
    if (splitContacts[0].toLowerCase() === searchName) {
      para.textContent = `${splitContacts[0]}'s number is ${splitContacts[1]}.`;
      break;
    }
  }

  if (para.textContent === '') {
    para.textContent = 'Contact not found!';
  }
});