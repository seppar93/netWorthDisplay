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
  updateDOM();
}
// update DOM

function updateDOM(providedData = data) {
  // clear the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    
    const element =  document.createElement('div');
    element.classList.add('person')
    element.innerHTML = `<strong> ${item.name} </strong>${formatMoney(item.wealth)}`;
    main.appendChild(element)
  })
}

// format money 
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);