document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you, Sarthak! Your message has been sent. I will contact you soon.");
  this.reset();
});
