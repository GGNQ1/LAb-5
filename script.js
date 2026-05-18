let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// casa
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'brown';
ctx.fillRect(130, 150, 130, 110) ;
ctx.closePath();

//chão
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'gray';
ctx.fillRect(0,260,400,300)
ctx.closePath();

//árvore esquerda baixo
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'brown';
ctx.fillRect(50, 200, 20, 60)

//árvore direita baixo
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'brown';
ctx.fillRect(350, 270, 20, 60)

//vidro casa esquerdo
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'lightblue'
ctx.fillRect(140, 170, 35, 35)

//vidro casa direito
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'lightblue'
ctx.fillRect(210, 170, 35, 35)

// porta casa 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'maroon';
ctx.fillRect(178, 210, 30, 50);

// árvore esquerda cima 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'green';
ctx.arc(60,180,30,0*Math.PI,2.5*Math.PI);
ctx.fill();

// árvore direita cima 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'green';
ctx.arc(360,250,30,0*Math.PI,2.5*Math.PI);
ctx.fill();

//sol
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.arc(320,80,50,0*Math.PI,2.5*Math.PI);
ctx.fill();

// telhado 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'coral';
ctx.moveTo(130,150);
ctx.lineTo(130+65,150-65);
ctx.lineTo(130+65+65,150-65+65);
ctx.fill();
ctx.closePath();

//cachoeira
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.arc(0,270,50,0*Math.PI,2.5*Math.PI);
ctx.fill();
//ctx.arc(0,270,50,1.5*Math.PI,2.5*Math.PI);

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.arc(180,390,50,0*Math.PI,2.5*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.fillRect(0, 345, 190, 100)

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.fillRect(0,250, 45, 200)
