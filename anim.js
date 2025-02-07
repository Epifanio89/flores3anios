// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I found a love for me", time: 1 },
  { text: "Oh, darling, just dive right in and follow my lead", time: 7 },
  { text: "Well, I found a girl, beautiful and sweet", time: 16 },
  { text: "Oh, I never knew you were the someone waitin' for me.", time: 24 },

  { text: "'Cause we were just kids when we fell in love, not knowin' what it was", time: 33 },
  { text: "I will not give you up this time", time: 41 },
  { text: "Oh, darling, just kiss me slow, your heart is all I own", time: 47 },
  { text: "And in your eyes, you're holding mine", time: 54 },

  { text: "Baby, I'm dancin' in the dark with you between my arms", time: 59 },
  { text: "Barefoot on the grass while listenin' to our favourite song", time: 67 },
  { text: "When you said you looked a mess, I whispered underneath my breath", time: 72 },
  { text: "But you heard it, Darling, you look perfect tonights", time: 78 },
  
  { text: "Well, I found a woman, stronger than anyone I know", time: 83 },
  { text: "She shares my dreams, I hope that someday, I'll share her home", time: 91 },
  { text: "I found a love to carry more than just my secrets", time: 97 },
  { text: "To carry love, to carry children of our own", time: 104 },

  { text: "We are still kids, but we're so in love, fightin' against all odds", time: 108 },
  { text: "I know we'll be alright this time", time: 144 },
  { text: "Darling, just hold my hand, be my girl, I'll be your man", time: 148 },
  { text: "I see my future in your eyes", time: 153 },

  { text: "Oh, baby, I'm dancin' in the dark with you between my arms", time: 158 },
  { text: "Barefoot on the grass while listenin' to our favourite song", time: 164 },
  { text: "When I saw you in that dress, lookin' so beautiful", time: 169 },
  { text: "I don't deserve this, darling, you look perfect tonight", time: 176 },

  { text: "No, no, no, Mm, oh", time: 183 },
  
  { text: "Baby, I'm dancin' in the dark with you between my arms", time: 158 },
  { text: "Barefoot on the grass while listenin' to our favourite song", time: 164 },
  { text: "I have faith in what I see, now I know I have met", time: 169 },
  { text: "An angel in person, and she looks perfect", time: 176 },

  { text: "Though I don't deserve this, you look perfect tonight", time: 188 },
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
