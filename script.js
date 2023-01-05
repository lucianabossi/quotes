//getting html elements
const selectMenu = document.querySelector('#categories');

//getting categories from API
async function getCategories() {
    let response = await fetch('https://quotes.rest/qod/categories');
    let data = await response.json();
    return data
};

console.log(getCategories());