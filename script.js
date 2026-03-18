// js/script.js

// Cart object to simulate added products
const cart = {};

// Smooth scroll for sections
function scrollToSection(id){
  const section = document.getElementById(id);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
}

// Add to cart → WhatsApp
function addToCart(product){
  const prices = {
    "Headphone": "₦15,000",
    "Smartwatch": "₦22,000",
    "Laptop": "₦150,000",
    "Camera": "₦75,000",
    "Speaker": "₦18,000",
    "Keyboard": "₦8,500",
    "Mouse": "₦5,000",
    "Monitor": "₦60,000"
  };

  if(cart[product]){
    alert(`${product} IS ALREADY ADDED ✅`);
  } else {
    cart[product] = true;
    // show dynamic notification
    const toast = document.createElement("div");
    toast.innerText = `${product} ADDED TO CART ✅`;
    toast.className = "fixed top-5 right-5 bg-green-500 text-black px-4 py-2 rounded shadow-lg animate-fade";
    document.body.appendChild(toast);
    setTimeout(()=>{toast.remove()},2000);

    // open WhatsApp with prefilled message
    const url = `https://wa.me/2349019071679?text=I WANT ${encodeURIComponent(product)} AT ${prices[product]}`;
    setTimeout(()=>{window.open(url,"_blank")},500);
  }
}

// Optional: animate fade in/out
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeInOut{
  0%{opacity:0; transform:translateY(-10px);}
  10%{opacity:1; transform:translateY(0);}
  90%{opacity:1; transform:translateY(0);}
  100%{opacity:0; transform:translateY(-10px);}
}
.animate-fade{animation:fadeInOut 2s ease forwards;}
`;
document.head.appendChild(style);

// Future: can add cart count in header or floating cart UI
