// Get references to the input fields and table body
const recipeName = document.getElementById('recipeName');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');
const addRecipeBtn = document.getElementById('addRecipeBtn');
const recipeTableBody = document.getElementById('recipeTableBody');


addRecipeBtn.addEventListener('click', () => {
    const name = recipeName.value;
    const ingredients = recipeIngredients.value;
    const instructions = recipeInstructions.value;

    if (name === '' || ingredients === '' || instructions === '') {
        alert('Please fill out all fields!');
        return;
    }

    
    let tableRow = document.createElement('tr');

    
    let nameData = document.createElement('td');
    nameData.textContent = name;

    let ingredientsData = document.createElement('td');
    ingredientsData.textContent = ingredients;

    let instructionsData = document.createElement('td');
    instructionsData.textContent = instructions;

    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        recipeTableBody.removeChild(tableRow);
    }

    let actionsData = document.createElement('td');
    actionsData.appendChild(deleteButton);

    
    tableRow.appendChild(nameData);
    tableRow.appendChild(ingredientsData);
    tableRow.appendChild(instructionsData);
    tableRow.appendChild(actionsData);

    
    recipeTableBody.appendChild(tableRow);

    
    recipeName.value = '';
    recipeIngredients.value = '';
    recipeInstructions.value = '';
});


