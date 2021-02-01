// function productDetail(){
//     var details = document.getElementById('details')
//     window.open("productdetail.html")
// }
async function fetchProductDetail(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('url');
    console.log(myParam);
    const res = await fetch(myParam);
    const jsonData = await res.json();
    console.log(jsonData);
    const ship = jsonData
    document.getElementById("product-div").innerHTML = `
    <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center"><i class="fas fa-long-arrow-alt-left"></i> <span class="ml-1">Back</span></div>
                                <i class="fas fa-shopping-cart text-muted"></i>
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">STARWAR SHIP</span>
                                <h5 class="text-uppercase"> shipName:${ship.name}</h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">$${ship.cost_in_credits}</span>
                        </div>
                    </div>
                    <p class="about">Model:  ${ship.model}</p>
                    <p class="about">Manufacturer: ${ship.manufacturer}</p>
                    <p class="about">Length: ${ship.length}</p>
                    <p class="about">Max Atmosphering Speed: ${ship.max_atmosphering_speed}</p>
                    <p class="about">Crew: ${ship.crew}</p>
                    <p class="about">Passengers: ${ship.passengers}</p>
                    <p class="about">Consumables: ${ship.consumables}</p>
                    <p class="about">Hyperdrive Rating: ${ship.hyperdrive_rating}</p>
                    <p class="about">MGLT: ${ship.MGLT}</p>
                    <p class="about">Starship Class ${ship.length}</p>
                    <p class="about">Pilots: ${ship.pilots.length > 0 ? ship.pilots[0]:"none"}</p>
                    <p class="about">Films: ${ship.films[0]}</p>
                    <p class="about">Created: ${ship.created}</p>
                    <p class="about">Edited: ${ship.edited}</p>
                    <p class="about">Link: ${ship.url}</p>
                </div>
                <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
    <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
    `
}
fetchProductDetail()

// MGLT: "60"
// cargo_capacity: "3000000"
// consumables: "1 year"
// cost_in_credits: "3500000"
// created: "2014-12-10T14:20:33.369000Z"
// crew: "30-165"
// edited: "2014-12-20T21:23:49.867000Z"
// films: (3) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
// hyperdrive_rating: "2.0"
// length: "150"
// manufacturer: "Corellian Engineering Corporation"
// max_atmosphering_speed: "950"
// model: "CR90 corvette"
// name: "CR90 corvette"
// passengers: "600"
// pilots: []
// starship_class: "corvette"
// url: "http://swapi.dev/api/starships/2/