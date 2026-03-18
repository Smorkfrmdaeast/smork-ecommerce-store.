// Scroll to section
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Add to Cart + WhatsApp
function addToCartWA(name, price, btn){
  btn.innerText = "Added ✅";
  btn.disabled = true;

  const phone = "2349019071679"; // Your WhatsApp number with country code
  const text = `Hello, I WANT TO BUY ${name} FOR ₦${price}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(waLink, "_blank");

  // Reset button after 5 seconds
  setTimeout(()=>{
    btn.innerText = "Add to Cart";
    btn.disabled = false;
  },5000);
}
