"use strict";

function renderCoffee(coffee) {
    var html = '<div class = "col-lg-4 col-md-6 col-sm-12">';
    html += '<div class="card mb-3" style="width: 15rem;">';
    html += '<div class="card-body">';
    if(coffee.roast === 'light'){
        html += '<h5 class="card-title color-light text-white text-center py-2">' +  coffee.name + '</h5>'
    }else if(coffee.roast === 'medium'){
        html += '<h5 class="card-title color-medium text-white text-center py-2">' +  coffee.name + '</h5>'
    }else{
        html += '<h5 class="card-title color-dark text-white text-center py-2">' +  coffee.name + '</h5>'
    }
    html += '<h6 class="card-subtitle mb-2 text-muted">' + coffee.roast + '</h6>';
    html += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
    html +=  '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}
 function renderCoffees(coffees) {
     var html = '';
     for(var i = 0; i < coffees.length; i++) {
         html += renderCoffee(coffees[i]);
     }
     return html;
 }

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === 'all'){
            filteredCoffees = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchBar(e) {
    var input = search.value.toUpperCase();
    var searchedCoffee = [];

    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().indexOf(input) === 0){
            searchedCoffee.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffee);
}

function addStuff(e) {
    var newRoast =  roastAdd.value;
    var newName = add.value;
    var newCoffee = {id: (coffees.length + 1), name: newName, roast: newRoast};



    coffees.push(newCoffee);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastAdd = document.querySelector('#roast-add');

var search = document.querySelector('#search');

var add = document.querySelector('#add');
var addButton = document.querySelector('#addButton');



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

search.addEventListener('keyup', searchBar);

addButton.addEventListener('click', addStuff);
addButton.addEventListener('click', updateCoffees);

