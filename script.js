const screens = document.querySelectorAll('.screen');

function openGame(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  autoGenerate(id);
}

function goHome() {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById('home').classList.add('active');
}

// HELPERS
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function autoGenerate(id) {
  if (id === 'mostLikely') nextMostLikely();
  if (id === 'truthDare') nextTruthDare();
  if (id === 'wouldRather') nextWouldRather();
  if (id === 'challenge') nextChallenge();
  if (id === 'conversation') nextConversation();
  if (id === 'tonight') nextTonight();
}

// GAME ACTIONS
function nextMostLikely() {
  document.getElementById('mostLikelyText').innerText = random(mostLikely);
}

function nextTruthDare() {
  document.getElementById('truthDareText').innerText = random(truthDare);
}

function nextWouldRather() {
  document.getElementById('wouldRatherText').innerText = random(wouldRather);
}

function nextChallenge() {
  document.getElementById('challengeText').innerText = random(challenges);
}

function nextConversation() {
  document.getElementById('conversationText').innerText =
    random(conversationStarters);
}

function nextTonight() {
  document.getElementById('tonightText').innerText =
    random(tonightIdeas);
}
