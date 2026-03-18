// Scroll smooth
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Add to Cart + WhatsApp
function addToCartWA(name, price, btn){
  btn.innerText = "Added ✅";
  btn.disabled = true;

  const phone = "2349019071679";
  const text = `Hello, I WANT TO BUY ${name} FOR ₦${price}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(waLink,"_blank");

  setTimeout(()=>{
    btn.innerText = "Add to Cart";
    btn.disabled = false;
  },4000);
}
