const playtBtn = document.getElementById("playButton");
const videoYoutube = document.getElementById("videoYoutube");
const youtubeTrailer = document.getElementById("youtubeTrailer");

playtBtn.addEventListener("click", () => {
  videoYoutube.classList.remove("hidden");
  videoYoutube.style.display = "flex";

  youtubeTrailer.src = "https://www.youtube.com/embed/CmRR-0XAttY";
});

videoYoutube.addEventListener("click", (e) => {
  if (
    e.target === videoYoutube ||
    e.target.classList.contains("sobreposicao")
  ) {
    videoYoutube.classList.add("hidden");
    videoYoutube.style.display = "none";
    youtubeTrailer.src = "";
  }
});
