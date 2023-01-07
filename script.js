//getting html elements
const selectMenu = document.getElementById('categories');

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
        newOption.innerText = optionsName[i];
        selectMenu.appendChild(newOption);
    }
};

showCategories();