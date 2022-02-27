
function loadCocktail(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => displayCockTail(data.drinks))
}
const displayCockTail = data =>{
    const container = document.getElementById('container');
    data.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="detail(${drink.idDrink})" class="col">
      <div class="card p-5 h-100 w-75">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strInstructions.slice(0,50)}</p>
        </div>
      </div>
        `
        container.appendChild(div);
    });
}
const detail = getId =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getId}
    `)
    .then(res => res.json())
    .then(data => detailById(data.drinks[0]))
}
const detailById = details => {
    console.log(details)
}