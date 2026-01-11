let meni = [
    "Home",
    "About",
    "Products",
    "Author"
];

let meniPutanje = [
    "#",
    "#about",
    "#products",
    "#author"
];

let ispis="<ul>";
for(let i = 0; i < meni.length; i++){
    ispis+=`<li><a href="${meniPutanje[i]}">${meni[i]}</a></li>`;
}
ispis+="</ul>";
document.getElementById("links").innerHTML = ispis;


let imgSrc = [
    "iceLatteCandle", 
    "chocolateCandle", 
    "cinnamonCandle",
    "raspberryCandle",
    "roseCandle",
    "pumpkinSpice",
    "margueritesCandle",
    "caramelCandle"];

let candleName = [
    "Iced Latte Dream",
    "Pure Chocolate Bliss",
    "Warm Cinnamon Embrace",
    "Raspberry Delight",
    "Velvet Rose",
    "Pumpkin Spice Glow",
    "Marguerites in Bloom",
    "Golden Caramel"
];

let price = [
    "$15",
    "$17",
    "$15",
    "$18",
    "$22",
    "$17",
    "$20",
    "$25"
];

let description = [
    "A smooth blend of creamy coffee and soft vanilla notes.",
    "Rich dark chocolate aroma, warm and inviting.",
    "Spiced cinnamon notes creating a comforting scent.",
    "Fresh and fruity raspberry scent with a soft sweetness.",
    "Elegant rose petals with a soft, romantic finish.",
    "Seasonal pumpkin spice wrapped in gentle warmth.",
    "Light floral notes inspired by blooming marguerites.",
    "Warm caramel sweetness with a golden finish."
];

let wax = [
    "100% Natural Soy Wax",
    "Premium Soy Wax Blend",
    "Eco Soy Wax",
    "Luxury Soy Wax",
    "Premium Soy Wax Blend",
    "Eco Soy Wax",
    "100% Natural Soy Wax",
    "Luxury Soy Wax"
];

let burn = [
    "45 hours",
    "50 hours",
    "30 hours",
    "40 hours",
    "45 hours",
    "50 hours",
    "45 hours",
    "45 hours"
];

let mood = [
    "Cozy • Warm • Comfort",
    "Indulgent • Sweet • Deep",
    "Warm • Spicy • Inviting",
    "Fresh • Playful • Bright",
    "Romantic • Floral • Soft",
    "Autumn • Cozy • Spiced",
    "Fresh • Floral • Airy",
    "Sweet • Cozy • Smooth"
];

let ispisBlokova = "";
for(let i = 0; i <= 7; i++){
    ispisBlokova += `<div class="product-block">
                <img src="assets/img/${imgSrc[i]}.jpg" alt="${candleName[i]}"/>
                <div class="product-content">
                <h3 class="candleName">${candleName[i]}</h3>
                <p class="description">${description[i]}</p>
                <ul class="details">
                    <li><strong>Wax : </strong>${wax[i]}</li>
                    <li><strong>Burn time : </strong>${burn[i]}</li>
                    <li><strong>Mood : </strong>${mood[i]}</li>
                </ul>
                <p class="price">${price[i]}</p>
                </div>
            </div>`
}
document.getElementById("products-blocks").innerHTML = ispisBlokova;

document.getElementById("exploreBtn").addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("contactForm").scrollIntoView({
        behavior:"smooth"
    });
});

let aboutP = document.getElementById("about-more");
let aboutButton = document.querySelector(".about-button");
aboutButton.addEventListener("click", function(){
    if(aboutP.style.display === "none" || aboutP.style.display === ""){
       aboutP.style.display = "block";
       aboutButton.textContent = "Show less";
    }
    else{
       aboutP.style.display = "none";
       aboutButton.textContent = "Show more"

    
    }
});

const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const error = document.getElementById("error");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const regex = /^[A-Z][a-z]{2,10}$/;

    if(regex.test(firstName.value)){
        error.textContent = "";
    }
    else{
        error.textContent = "Name must start with capital letter";
    }
});


window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        history.replaceState(null, null, " ");
    }, 0);
});