window.onload = () => {
  const audio = new Audio("musica/Murart.mp3");

  const divi = document.getElementById("write");
  const font = ["Sevillana", "Petit Formal Script", "Reenie Beanie", "madimi one", "Nabla", "honk"];
  const text = [
    "Pudinzinho❤",
    "Bebezinha❤",
    "Eu te amo",
    "Me perdoa?",
    "Voce gostou?",
    "Minha fofa",
    "Princesa",
    "Player 1",
    "Rainha",
    "Mulher da minha vida",
    "Me da outra chace?",
    "Flanguinho",
    "❤",
    "Minha boinha",
    "Boinhao te ama muito",
    "Fiz com carinho",
    "player 2",
    "Bom dia Princesa",
    "Linda",
    "Maravilhosa",
    "Perfeita",
  ];

  document.body.oncontextmenu = (e) => {
    e.preventDefault();
  };

  onclick = () => {
    audio.volume = 0.2;
    audio.play();
    setInterval(() => {
      audio.play();
      let count = Math.floor(Math.random() * font.length - 1);
      let ctrl = Math.floor(Math.random() * text.length - 1);
      divi.style.opacity = "0%";
      divi.style.transition = "ease-in 1s";
      setTimeout(() => {
        divi.innerText = text[ctrl];
        divi.style.fontFamily = font[count];
        divi.style.opacity = "100%";
        divi.style.transition = "ease-in 1s";
      }, 1000);
    }, 3000);
  };
};
