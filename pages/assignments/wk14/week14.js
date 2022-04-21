const myCar = new Object();
myCar.color = 'Gray';
myCar.make = 'Mazda';
myCar.model = 'CX-5';
myCar.year = '2022';
// general syntax: object.property = value;
console.log(myCar.make);

const mySecondCar = {
  color: 'Black',
  make: 'Tesla',
  model: 'Y',
  year: '2022',
}
// second way of defining Object
console.log(mySecondCar['make']);

//
let superHeroes = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    // this is an array object, object, object
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
console.log(superHeroes['members'][0]); // first member in member array (Molecule Man)
console.log(superHeroes['members'][0]['powers'][0]); // first power in Molecule Man powers array (Radiation)

// Function to add another superHero
function addHero(obj, heroName, heroAge, heroIdentity, heroPowers) {
  let hero = {
    "name": heroName,
    "age": heroAge,
    "secretIdentity": heroIdentity,
    "powers": heroPowers
  };

  obj['members'].push(hero); // the push() method adds a value to an object/array.

}
//  uncomment this line to add a hero; notice how it pushes fourth entry to the second line?
//  try changing the width of the body and of the article in the week14-demo.css file
addHero(superHeroes, "The Batman", 45, "Bruce Wayne", ["money", "technology", "Alfred"]);


// Function
function populateHeader(x) {
  const header = document.querySelector('header'); //first instance of a header
  const myH1 = document.createElement('h1'); //create a new h1 element
  myH1.textContent = x['squadName']; //put whatever x[squadName] into h1 content
  header.appendChild(myH1); //add the h1 to the populateHeader

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${x['homeTown']} // Formed: ${x['formed']}`; //use backquote and ${} to fill in data
  header.appendChild(myPara);
}

// The superheroes section
function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj['members'];

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populateHeader(superHeroes);
populateHeroes(superHeroes);
