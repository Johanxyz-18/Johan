// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { "text": "Él la estaba esperando con una flor amarilla", "time": 16 },
  { "text": "Ella lo estaba soñando con la luz en su pupila", "time": 23 },
  { "text": "Y el amarillo del sol iluminaba la esquina", "time": 31 },
  { "text": "La esquina, lo sentía tan cercano", "time": 36 },
  { "text": "Lo sentía desde niña", "time": 39 },
  { "text": "Ella sabía que sabía que algún día pasaría", "time": 44 },
  { "text": "Que vendría a buscarla con sus flores amarillas", "time": 50 },
  { "text": "No te apures, no detengas el instante del encuentro", "time": 58 },
  { "text": "Está dicho que es un hecho", "time": 59},
  { "text": "No la pierdas, no hay derecho", "time": 60 },
  { "text": "No te olvides que la vida casi nunca está dormida", "time": 66 },
  { "text": "En ese bar tan desierto no se esperaba el encuentro", "time": 92 },
  { "text": "Ella llegó en limusina amarilla, por supuesto", "time": 99 },
  { "text": "Él se acercó de repente y la miró tan de frente", "time": 108 },
  { "text": "Toda una vida soñó y no pudo decir nada", "time": 116 },
  { "text": "Ella ya sabía que sabía que algún día pasaría", "time": 121 },
  { "text": "Que vendría a buscarla con sus flores amarillas", "time": 127 },
  { "text": "No te apures, no detengas el instante del encuentro", "time": 134 },
  { "text": "Está dicho que es un hecho", "time": 136 },
  { "text": "No la pierdas, no hay derecho", "time": 139 },
  { "text": "No te olvides que la vida casi nunca está dormida", "time": 143 },
  { "text": "Flores amarillas", "time": 157 },
  { "text": "Ella sabía que sabía que algún día pasaría", "time": 167 },
  { "text": "Que vendría a buscarla con sus flores amarillas", "time": 171 },
  { "text": "No te apures, no detengas el instante del encuentro", "time": 179 },
  { "text": "Está dicho que es un hecho", "time": 182 },
  { "text": "No la pierdas, no hay derecho", "time": 184 },
  { "text": "No te olvides que la vida casi nunca está dormida", "time": 187 },
  { "text": "Él sabía que él sabía, él sabía", "time": 197 },
  { "text": "Y ella sabía que él sabía, ya sabía", "time": 199 },
  { "text": "Y se olvidaron de sus flores amarillas", "time": 203 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);