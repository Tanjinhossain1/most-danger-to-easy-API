
function spiner (styles){
    document.getElementById('spiner').style.display = styles;
}
const loadPlayers = () =>{
  
    spiner('block')
    const input = document.getElementById('input');
    const inputValue = input.value;
    const leader = document.getElementById('leader');
    leader.textContent = '';
    input.value = '';

    if(inputValue == ''){
        alert('SEARCH PLAYER NAME')
        spiner('none')
    }else{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}
}
function mast (){
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck`)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}
mast()
const displayPlayer = data  =>{
    if(data == null){
        alert('SEARCH A VALID NAME')
    }
  else{

 
    const container = document.getElementById('container');
    container.textContent = '';
    data.forEach(player => {
          console.log(player)
        const div = document.createElement('div');
        div.innerHTML = `
                   <div onclick="useId(${player.idPlayer})" class="col w-75 mt-4">
                      <div class="card p-5 ">
                        <img src="${player.strThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Name: ${player.strPlayer}</h5>
                          <p class="card-text">BirthLocation: ${player.strBirthLocation}</p>
                        </div>
                      </div>
                   </div>
        `;
        container.appendChild(div);
    });
}   spiner('none')
}
const useId = getId =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${getId}
    `)
    .then(res => res.json())
    .then(data => displayDetail(data.players[0]))
}
const displayDetail = player =>{
    const leader = document.getElementById('leader');
    leader.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
               <div class="col m-5 w-75 mt-4">
                  <div  class="card p-5 ">
                  <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name: ${player.strPlayer}</h5>
                      <h5 class="card-text">BirthLocation: ${player.strBirthLocation}</h5>
                      <H5>Height: ${player.strHeight}</h5>
                      <H5>Gender: ${player.strGender}</h5>
                      <H5>Sport: ${player.strSport}</h5>
                      <H5>Born-Date: ${player.dateBorn}</h5>
                      <p>Description: ${player.strDescriptionEN.slice(0,200)}
                    </div>
                  </div>
               </div>
    `;
    leader.appendChild(div)
}