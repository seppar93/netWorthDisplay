// elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const showMillionairesBtn = document.getElementById('show-millionaires');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

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
  addData(newUser);
}

// double wealth
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, wealth: user.wealth * 2 }; // spread copies what is in the user
  });
  updateDOM();
}

// Sorts user by richest
function sortByRichest() {
  data.sort((a, b) => b.wealth - a.wealth);

  updateDOM();
}

// filter by Millionaires
function showMillionaires() {
  data = data.filter((user) => user.wealth > 1000000);
  updateDOM();
}

//
function calculateWealth() {
  const totalWealth = data.reduce((acc, user) => (acc += user.wealth), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3> Total Wealth: <strong> ${formatMoney(
    totalWealth
  )} </strong>`;
  main.appendChild(wealthEl);
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}
// update DOM

function updateDOM(providedData = data) {
  // clear the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong> ${item.name} </strong>${formatMoney(
      item.wealth
    )}`;
    main.appendChild(element);
  });
}

// format money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
