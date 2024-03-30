window.sessionStorage.setItem('name', 'ram');
window.localStorage.setItem('age', '24');
window.localStorage.setItem('gender', 'male');
// console.log(window.localStorage)
// console.log(window.localStorage.getItem('name'))
// window.localStorage.removeItem('name');


// /* object store to localstorage use json.stingify/
const recentSearches = [
    {
        title: 'Laptops',
        similarSearches: ['Laptops', 'Laptop for sale', 'Laptops under $25000']    
    },

    {
       title: 'Mobiles',
       similarSearches: ['Mobiles', 'Mobiles for sale', 'Mobiles under $15000']

    },

    {
        title: 'Tablets',
        similarSearches: ['Tablets', 'Tablets for sale', 'Tablets under $20000']

    }
]
localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

// * get outside in localstorage use getItem and key 'name' in console

const searches = JSON.parse(localStorage.getItem('recentSearches'));
console.log(searches[0])

// for( let index = 0; index < recentSearches.length; index++){
//     recentSearches[index].localStorage
// }
// console.log(localStorage.recentSearches)