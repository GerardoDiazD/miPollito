
function iniciarInteraccion() {
  let puntos = 0;
  const juego = document.getElementById("juego");
  const conejita = document.getElementById("conejita");
  const mensajeFinal = document.getElementById("mensajeFinal");

  conejita.addEventListener("click", () => {
    puntos++;
  

    // Calcula posiciones aleatorias dentro del contenedor #juego
    const maxTop = juego.clientHeight - conejita.offsetHeight;
    const maxLeft = juego.clientWidth - conejita.offsetWidth;

    const nuevaTop = Math.floor(Math.random() * maxTop);
    const nuevaLeft = Math.floor(Math.random() * maxLeft);

    conejita.style.top = `${nuevaTop}px`;
    conejita.style.left = `${nuevaLeft}px`;

    if (puntos == 3) {
      conejita.style.display = "none"; // Oculta la conejita al ganar
      mensajeFinal.style.display = "block";
      mensajeFinal.classList.add("visible");
      
    }

  });

}
