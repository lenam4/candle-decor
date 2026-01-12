let meni = [
    "Home",
    "About",
    "Products",
    "Author",
    "Zip"
];

let meniPutanje = [
    "#",
    "#about",
    "#products",
    "author.html",
    "assets/zip/candle.zip"
];
function renderMenu(menuItems, menuLinks){
let output="<ul>";
for(let i = 0; i < meni.length; i++){
    output+=`<li><a href="${meniPutanje[i]}">${meni[i]}</a></li>`;
}
output+="</ul>";
return output;
}
document.getElementById("links").innerHTML = renderMenu(meni, meniPutanje);

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
//DINAMICKO KREIRANJE
const selectContainer = document.getElementById("selectContainer");
const select = document.createElement("select");
select.id = "reason";
select.innerHTML = "<option value='0'>Choose</option>";
const options = ["Product inquiry", "Custom candle request", "Wholesale / bulk order", "Collaboration", "General question"];

options.forEach(text=>{
    const optionEl = document.createElement("option");
    optionEl.value = text;
    optionEl.textContent = text;
    select.appendChild(optionEl);
    
});
selectContainer.appendChild(select);

select.style.height = "50px";
select.style.padding = "14px 16px";

//REGULARNI IZRAZI
const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const reason = document.getElementById("reason");
const message = document.getElementById("message");
const success = document.getElementById("success");
const errorFirst = document.getElementById("errorFirst");
const errorLast = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorReason = document.getElementById("errorReason");
const errorMessage = document.getElementById("errorMessage");


contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    // Clear previous success message
    success.textContent = "";

    const regex = /^[A-Z][a-z]{2,10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    // First Name validation
    if(!regex.test(firstName.value)){
        errorFirst.textContent = "First name must start with a capital letter";
        valid = false;
    } else {
        errorFirst.textContent = "";
    }

    // Last Name validation
    if(!regex.test(lastName.value)){
        errorLast.textContent = "Last name must start with a capital letter";
        valid = false;
    } else {
        errorLast.textContent = "";
    }

    // Email validation
    if(!emailRegex.test(email.value)){
        errorEmail.textContent = "Please enter a valid email";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    // Reason validation
    if(reason.value === "0"){
        errorReason.textContent = "Please select a reason";
        valid = false;
    } else { 
        errorReason.textContent = ""; 
    }

    // Message validation
    if(message.value.trim() === ""){
        errorMessage.textContent = "Message cannot be empty";
        valid = false;
    } else {
        errorMessage.textContent = "";
    }

    // Show success only if form is valid
    if(valid){
        success.textContent = "Form submitted successfully!";
        success.style.color = "green";
        contactForm.reset();
    }
});

document.getElementById("footerLinks").innerHTML = renderMenu(meni, meniPutanje);

const socialNames = ["facebook", "instagram", "twitter"];
const socialLinks = [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.twitter.com"
];

const socialDiv = document.createElement("div");
socialDiv.id = "footerSocial";
socialDiv.style.display = "flex";
socialDiv.style.gap = "15px";

for (let i = 0; i < socialNames.length; i++) {
    const a = document.createElement("a");
    a.href = socialLinks[i];
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const iTag = document.createElement("i");
    iTag.className = `fab fa-${socialNames[i]}`;
    iTag.style.opacity = "0.5";
    iTag.style.cursor = "pointer";
    iTag.style.color = "#5a3e36";

    a.appendChild(iTag);
    socialDiv.appendChild(a);
}

document.getElementById("footerNav").appendChild(socialDiv);


const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");

hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
});

function toggleContactButton() {
    const btn = document.getElementById("button");
    if (!btn) return;

    if (window.innerWidth <= 600) {
        btn.style.display = "none";
    } else {
        btn.style.display = "inline-block";
    }
}

window.addEventListener("load", toggleContactButton);
window.addEventListener("resize", toggleContactButton);


window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        history.replaceState(null, null, " ");
    }, 0);
});

