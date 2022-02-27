
const loadPhoto = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
    spin('block')
}
loadPhoto()
function spin(desine){
    document.getElementById('spin').style.display = desine
}
const displayPhoto = data =>{
    // console.log(data)
    
    const container = document.getElementById('container');
    data.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="showDetaile(${photo.id})" class="col">
        <div class="card h-100 w-100">
          <img  src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-title">${photo.title}</p>
          </div>
        </div>
      </div>
        `;
        container.appendChild(div)
    });
    spin('none')
}
const showDetaile = useId =>{
    fetch(`https://jsonplaceholder.typicode.com/photos?id=${useId}`)
    .then(res => res.json())
    .then(data => loadId(data[0]))
}
const loadId = display =>{
    const leader = document.getElementById('leader');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
        <div class="card h-100 w-25">
          <img  src="${display.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-title">${display.title}</p>
            <button><a class="text-black text-decoration-none" href="${display.url}">Photos</a></button>
          </div>
        </div>
      </div>
    `;
    leader.appendChild(div)
}






















