const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");



function desenhar_quadrado(x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}



function desenhar_linha(x1, y1, x2, y2, cor, largura = 2) {
  ctx.beginPath();
  ctx.strokeStyle = cor;
  ctx.lineWidth = largura;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}



function desenhar_arco(x, y, raio, cor) {
  ctx.beginPath();
  ctx.fillStyle = cor;
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fill();
}



function escrever(texto, x, y, cor = "black") {
  ctx.fillStyle = cor;
  ctx.font = "16px Arial";
  ctx.fillText(texto, x, y);
}


function desenhar_cena() {

  
  desenhar_quadrado(0, 0, 300, 200, "#c8f3ee");

  
  desenhar_quadrado(0, 200, 300, 100, "#d3d3d3");

  
  desenhar_arco(240, 60, 30, "yellow");

  
  ctx.beginPath();
  ctx.fillStyle = "#6ec5e9";
  ctx.arc(0, 300, 80, 0, Math.PI * 2);
  ctx.fill();

  function desenhar_arco(x, y, raio, cor) {
  ctx.beginPath();
  ctx.fillStyle = cor;
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fill();

}


  
  desenhar_quadrado(110, 130, 80, 70, "#8b5a2b");

  
desenhar_quadrado(140, 160, 20, 40, "#5c3a21");


desenhar_arco(155, 180, 2, "black");

  
  ctx.beginPath();
  ctx.fillStyle = "#d97b5c";
  ctx.moveTo(110, 130);
  ctx.lineTo(150, 90);
  ctx.lineTo(190, 130);
  ctx.closePath();
  ctx.fill();

  
  desenhar_quadrado(120, 145, 20, 20, "#87ceeb");
  desenhar_quadrado(160, 145, 20, 20, "#87ceeb");

  
  desenhar_quadrado(40, 160, 10, 40, "#8b5a2b");
  desenhar_arco(45, 160, 20, "green");

  
  desenhar_quadrado(250, 210, 10, 40, "#8b5a2b");
  desenhar_arco(255, 200, 20, "green");

}


// chama tudo
desenhar_cena();