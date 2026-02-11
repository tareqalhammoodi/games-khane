const screens = document.querySelectorAll('.screen');
let currentGame = null;

function openGame(id) {
  if (id === 'wheel') {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById('wheel').classList.add('active');
    return;
  }
  
  const config = gameConfig[id];
  if (!config) return;
  
  currentGame = id;
  
  // Update UI elements
  document.getElementById('gameTitle').innerText = config.title;
  document.getElementById('gameButton').innerText = config.buttonText;
  
  // Show game screen
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById('gameScreen').classList.add('active');
  
  // Load first content
  nextGame();
}

function goHome() {
  currentGame = null;
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById('home').classList.add('active');
}

// HELPERS
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// GAME ACTION
function nextGame() {
  if (!currentGame) return;
  const config = gameConfig[currentGame];
  if (config) {
    document.getElementById('gameText').innerText = random(config.data());
  }
}
