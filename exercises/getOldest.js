const people = [
  {
    name: 'Jay',
    yearOfBirth: 1942,
    yearOfDeath: 2011,
  },

  {
    name: 'Jame',
    yearOfBirth: 1982,
    yearOfDeath: 2025,
  },

  {
    name: 'Jake',
    yearOfBirth: 1962,
    yearOfDeath: 2009,
  },
];

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const firstAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    return oldAge < firstAge ? currentPerson : oldest;
  });
}

console.log(findTheOldest(people));
