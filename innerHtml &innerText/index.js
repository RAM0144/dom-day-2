const favoriteFoods = document.querySelector('#favoriteFoods');

const foods = ['pizza', 'burger', 'shawarma','biriyani', 'ice cream', 'rasagulla'];

let foodList = '';

foods.forEach(food =>{
     foodList = foodList + `<li>${food}</li>`;
})
favoriteFoods.innerHTML = foodList;


const container = document.querySelector('.container');

// container.innerText = 'Ram';
container.children[0].innerText = 'ram'
container.children[1].innerText = 'ram love to varsha truly';
// container.innerHTML = `<p>ram love varsha</p>`

for (let index = 0; index < container.children.length; index++){
     console.log(container.children[index]);
}