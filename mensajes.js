function sendMessage() {
    let nombre = document.getElementById("nombre").value;
    let message = "Hola, vi tu página y quiero hacerte una recomendacion " + nombre;
    let whatsappLink = "https://api.whatsapp.com/send?phone=573184255610&text=" + encodeURI(message);
    window.open(whatsappLink, "_blank");
  }
  