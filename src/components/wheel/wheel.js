let players = [];
let canvas, ctx;
let startAngle = 0;
let arc = 0;
let spinTimeout = null;
let spinAngle = 0;
let spinTime = 0;
let spinTimeTotal = 0;
let isSpinning = false;

// Color palette
const colors = [
  '#FF6B6B', '#4ECDC4', '#2f494fff', '#FFA07A', 
  '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
  '#F8B195', '#F67280', '#C06C84', '#6C5B7B',
  '#355C7D', '#99B898', '#FECEAB', '#FF847C'
];

function startWheel() {
  const input = document.getElementById('playerNamesInput').value.trim();
  
  if (!input) {
    alert('Please enter at least 2 options!');
    return;
  }

  players = input.split('\n').map(p => p.trim()).filter(p => p.length > 0);
  
  if (players.length < 2) {
    alert('Please enter at least 2 options!');
    return;
  }

  // Initialize canvas
  canvas = document.getElementById("wheelCanvas");
  ctx = canvas.getContext("2d");
  arc = Math.PI * 2 / players.length;

  // Show wheel section
  document.getElementById('playerInputSection').style.display = 'none';
  document.getElementById('wheelSection').style.display = 'block';
  
  drawWheel();
}

function drawWheel() {
  const outsideRadius = 135;
  const textRadius = 97;
  const insideRadius = 23;

  ctx.clearRect(0, 0, 300, 300);
  ctx.strokeStyle = '#1a1a26';
  ctx.lineWidth = 3;

  ctx.font = 'bold 16px Poppins, sans-serif';

  players.forEach((player, i) => {
    const angle = startAngle + i * arc;
    
    // Draw slice
    ctx.beginPath();
    ctx.arc(150, 150, outsideRadius, angle, angle + arc, false);
    ctx.arc(150, 150, insideRadius, angle + arc, angle, true);
    ctx.closePath();
    
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.stroke();
    ctx.save();

    // Add shadow for depth
    ctx.shadowBlur = 0;
    
    // Draw text
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 3;
    
    ctx.translate(
      150 + Math.cos(angle + arc / 2) * textRadius,
      150 + Math.sin(angle + arc / 2) * textRadius
    );
    ctx.rotate(angle + arc / 2 + Math.PI / 2);
    
    const text = player.length > 15 ? player.substring(0, 13) + '...' : player;
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  });

  // Draw center circle
  ctx.beginPath();
  ctx.arc(150, 150, insideRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#1a1a26';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function spinWheel() {
  if (isSpinning) return;
  
  isSpinning = true;
  document.getElementById('spinButton').disabled = true;
  
  spinAngle = Math.random() * 10 + 20; // More rotations
  spinTime = 0;
  spinTimeTotal = Math.random() * 2000 + 4000; // 4-6 seconds
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }

  const spinAngleIncrement =
    spinAngle - easeOut(spinTime, 0, spinAngle, spinTimeTotal);
  startAngle += (spinAngleIncrement * Math.PI / 180);
  drawWheel();
  spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  isSpinning = false;
  document.getElementById('spinButton').disabled = false;

  // Calculate winner (pointing up)
  const degrees = startAngle * 180 / Math.PI + 90;
  const arcd = arc * 180 / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd);

  const winner = players[index];
  showResult(winner);
}

function showResult(winner) {
  document.getElementById('winnerName').innerText = winner;
  document.getElementById('resultModal').classList.add('show');
}

function closeResult() {
  document.getElementById('resultModal').classList.remove('show');
}

function spinAgain() {
  closeResult();
  setTimeout(() => spinWheel(), 300);
}

function resetWheel() {
  players = [];
  startAngle = 0;
  document.getElementById('wheelSection').style.display = 'none';
  document.getElementById('playerInputSection').style.display = 'block';
  document.getElementById('playerNamesInput').value = '';
  closeResult();
}

function easeOut(t, b, c, d) {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}
