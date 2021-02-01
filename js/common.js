async function searchShip(){
alert()
    let searchTerms = document.getElementById("search").value;
    console.log(searchTerms)
    const res = await fetch(`https://swapi.dev/api/starships/?search=${searchTerms}`)
    const jsonData = await res.json();
    console.log('here')
        jsonData.results.forEach( (ship) => {
           console.log(ship.name)
           list += `
           
                <div class="col-md-3">
                    <div class="card">
                        <img src="img/starwar.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                        <h5>${ship.name}</h5>
                        <h5>${ship.cost_in_credits}</h5>
                        <h5>length</h5>
                        <button id="details" type="button" onClick="window.open('/productdetail.html?url=${ship.url}')" class="btn btn-success" ><i class="fas fa-cart-plus"></i>Detail</button>
                        </div>
                        </div>
                        </div>
                `
       })
}
document.getElementById("btn-search").addEventListener("click",searchShip)