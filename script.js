console.log("Site carregado");
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

  document.querySelector(".overlay").style.display = "none";
}