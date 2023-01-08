//getting html elements
const selectMenu = document.getElementById('categories');
const buttonOk = document.getElementById('btnOk');

//getting categories from API
async function getCategories() {
    try {
        const response = await fetch('https://quotes.rest/qod/categories');
        const data = response.json();
        return data
    } catch (err) {
        console.log(err)
    }
    
};

//creating options inside the select menu
async function showCategories() {
    var options = await getCategories();
    const optionsName = Object.getOwnPropertyNames(options.contents.categories);
    for(let i=0; i< optionsName.length; i++) {
        const newOption = document.createElement('option');
        newOption.value = optionsName[i];
        newOption.innerText = optionsName[i];
        selectMenu.appendChild(newOption);
    }
};

showCategories();

//storing user category
var userCategory;
selectMenu.addEventListener('change', (event) => {
    userCategory = selectMenu.value;
});
//getting quotes from api
async function getQuote() {
    try {
        const category = `http://quotes.rest/qod.json?category=${userCategory}`;
        const res = await fetch(category);
        const data = res.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}

buttonOk.addEventListener('click', (event) => {
    console.log(getQuote());
})