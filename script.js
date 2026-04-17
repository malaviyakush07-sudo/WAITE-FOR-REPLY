const btn = document.getElementById("noBtn");

if (btn) {
  btn.addEventListener("mouseover", () => {
    const x = Math.random()*(window.innerWidth-120);
    const y = Math.random()*(window.innerHeight-80);

    btn.style.position="absolute";
    btn.style.left=x+"px";
    btn.style.top=y+"px";
  });
}