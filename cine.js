function filtrar(genero) {
  var peliculas = document.querySelectorAll(".pelicula");
  for (var i = 0; i < peliculas.length; i++) {
    if (genero == "todas" || peliculas[i].classList.contains(genero)) {
      peliculas[i].style.display = "block";
    } else {
      peliculas[i].style.display = "none";
    }
  }
}
function elegirPelicula() {
  var titulo = this.querySelector("h3").textContent;
  window.location.href = "boletos.html?pelicula=" + encodeURIComponent(titulo);
}
function enviar(evento) {
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  document.getElementById("mensaje").textContent = "Gracias, " + nombre + ". Recibimos tu mensaje.";
}
var tarjetas = document.querySelectorAll(".pelicula");
for (var i = 0; i < tarjetas.length; i++) {
  tarjetas[i].onclick = elegirPelicula;
}
var aviso = document.createElement("p");
aviso.className = "aviso";
aviso.textContent = "Haz clic en una película para comprar tus boletos.";
document.querySelector("#cartelera h2").after(aviso);