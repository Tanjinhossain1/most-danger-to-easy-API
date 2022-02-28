
function spiner(styles){
    document.getElementById('spiner').style.display = styles;
}
const loadFood = () =>{
    spiner('block')
    const input = document.getElementById('input');
    const inputValue = input.value;
    const leader = document.getElementById('leader');
    input.value = '';
    leader.textContent = '';
    if(inputValue == ''){
        alert('TYPE FOOD NAME, WHAT YOU WANT')
    }else{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
        }

}
const displayMeal = data =>{
   if(data == null){
       alert('GIVE VALID NAME OF FOOD')
   }else{
    const container = document.getElementById('container');
    container.textContent = '';
    data.forEach(meals => {
        console.log(meals)
        const div  = document.createElement('div');
        div.innerHTML = `
        <div  onclick="loadDetail(${meals.idMeal})" class="col ">
        <div class="card p-5">
          <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">${meals.strInstructions.slice(0,100)}</p>
          </div>
        </div>
      </div>
        `;
        container.appendChild(div)
    });

}
spiner('none')
}
const loadDetail = mealId =>{
    // console.log(meals)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res  => res.json())
    .then(data => displayDetail(data.meals[0]))
}
const displayDetail = meals =>{
    const leader = document.getElementById('leader');
    leader.textContent = '';
    const div  = document.createElement('div');
    div.innerHTML = `
    <div class="col w-25 mt-5 mx-auto">
    <div class="card p-5">
      <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meals.strMeal}</h5>
        <p class="card-text">${meals.strInstructions.slice(0,200)}</p>
        <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    `;
    leader.appendChild(div)
}