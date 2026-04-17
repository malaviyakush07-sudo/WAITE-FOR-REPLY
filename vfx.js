const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let hearts = [];

for(let i=0;i<50;i++){
  hearts.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2 + 1,
    speed: Math.random()*0.5 + 0.2
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  hearts.forEach(h=>{
    h.y -= h.speed;
    if(h.y < 0) h.y = canvas.height;

    ctx.fillStyle = "rgba(255,0,100,0.6)";
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();