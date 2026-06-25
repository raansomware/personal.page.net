// =====================
// CURSOR
// =====================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// =====================
// SPARKLES (soft)
// =====================

function sparkle(x, y) {
  const s = document.createElement("div");
  s.textContent = "✦";
  s.style.position = "fixed";
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.opacity = "0.6";
  s.style.pointerEvents = "none";
  document.body.appendChild(s);

  setTimeout(() => s.remove(), 1200);
}

document.addEventListener("click", (e) => {
  sparkle(e.clientX, e.clientY);
});

// =====================
// PORTAL (mewo → video shitpost)
// =====================

document.getElementById("portal").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
});

// =====================
// MUSIC
// =====================

const audio = document.getElementById("audio");
audio.src = "music.mp3";

document.getElementById("play").onclick = () => {
  if (audio.paused) audio.play();
  else audio.pause();
};

// =====================
// GUESTBOOK
// =====================

const log = document.getElementById("log");

document.getElementById("send").onclick = () => {
  const n = document.getElementById("name").value;
  const m = document.getElementById("msg").value;

  if (!n || !m) return;

  const div = document.createElement("div");
  div.textContent = `${n}: ${m}`;
  div.style.opacity = "0.75";

  log.appendChild(div);
};

// =====================
// STICKERS (simple base system)
// =====================

const canvas = document.getElementById("stickerCanvas");

document.getElementById("uploadSticker").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result;

    img.style.position = "absolute";
    img.style.width = "90px";
    img.style.left = "200px";
    img.style.top = "200px";
    img.style.cursor = "grab";

    canvas.appendChild(img);
  };

  reader.readAsDataURL(file);
});

// =====================
// CONSOLE EASTER EGG
// =====================

console.log("%cKEL ORANGE JOE", "color: orange; font-size: 20px; font-weight: bold;");
