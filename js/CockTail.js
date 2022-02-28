function spinner(stylers){
  document.getElementById('spinner').style.display = stylers;
}
function loadCocktail(){
    spinner('block')
    const input = document.getElementById('input');
    let inputValue = input.value;
    inputValue.textContent = '';
    if(inputValue == ''){
      alert("It's Not Working")
  }else{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => displayCockTail(data.drinks))
  }
}
const displayCockTail = data =>{
  if(data == null){
  alert('Give Valid Name')
  }else{
    const container = document.getElementById('container');
    container.textContent = '';
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
    spinner('none')
  }
}
const detail = getId =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getId}
    `)
    .then(res => res.json())
    .then(data => detailById(data.drinks[0]))
}
const detailById = drink => {
    console.log(drink)
    const parent = document.getElementById('parent');
    parent.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div" class="col ">
    <div class="card p-5 h-100 w-25 mx-auto">
      <img  src="${drink.strDrinkThumb}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${drink.strDrink}</h5>
        <p class="card-text">${drink.strInstructions.slice(0,300)}</p>
      </div>
    </div>
    `;
    parent.appendChild(div);
}   