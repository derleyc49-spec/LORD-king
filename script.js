let cart = []

function scrollToCars(){
document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

function updateCart(){
document.getElementById("cartCount").innerText = cart.length
}

function addToCart(item){
cart.push(item)
updateCart()
renderCart()
}

function openCart(){
document.getElementById("cartBox").style.display = "block"
}

function closeCart(){
document.getElementById("cartBox").style.display = "none"
}

function renderCart(){
let box = document.getElementById("cartItems")
box.innerHTML = ""

cart.forEach((item,i)=>{
box.innerHTML += `
<p>${item.name} ${item.price}</p>
`
})
}

function card(item){
return `
<div class="card">
<img src="${item.img}">
<div class="cardContent">
<h3>${item.name}</h3>
<p>${item.price}</p>
<p>${item.details}</p>
<button onclick='addToCart(${JSON.stringify(item)})'>Adicionar</button>
</div>
</div>
`
}

function generateCars(){

let cars = []

const brands = ["Mercedes","BMW","Audi","Ferrari","Porsche"]

for(let i=1;i<=200;i++){

let brand = brands[i % brands.length]

cars.push({
name: brand + " Model " + i,
price: (100000 + i * 2000) + "€",
details: "Motor V" + ((i % 8)+4) + " Turbo",
img: "https://picsum.photos/seed/car"+i+"/400/300"
})

}

document.getElementById("carsGrid").innerHTML =
cars.map(card).join("")

}

function generateHomes(){

let homes = []

for(let i=1;i<=200;i++){

homes.push({
name: "Luxury House " + i,
price: (500000 + i * 5000) + "€",
details: "Villa moderna com piscina",
img: "https://picsum.photos/seed/home"+i+"/400/300"
})

}

document.getElementById("homesGrid").innerHTML =
homes.map(card).join("")

}

generateCars()
generateHomes()
updateCart()
