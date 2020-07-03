// elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const showMillionairesBtn = document.getElementById('show-millionaires');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

let data = [];
getRandomUser();
getRandomUser();

// fetch user
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  // console.log(data);
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    wealth: Math.floor(Math.random() * 1000000),
  };
  console.log(newUser);
  addData(newUser)
}

function addData(obj) {
  data.push(obj)
}