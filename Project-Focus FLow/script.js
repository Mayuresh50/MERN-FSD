let state = {
  session: {},
  runtime: {},
  history: JSON.parse(localStorage.getItem("ff-history")) || [],
};

let timerInterval = null;
let autosaveInterval = null;

const form = document.getElementById("session-form");
const startBtn = document.getElementById("start-btn");

const nameInput = document.getElementById("name");
const studyInput = document.getElementById("study");
const breakInput = document.getElementById("break");
const cyclesInput = document.getElementById("cycles");

const pauseBtn = document.getElementById("pause-btn");

const saved = localStorage.getItem("current");
if (saved) {
  state = JSON.parse(saved);
  document.getElementById("form-section").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  startTimer();
  startAutosave();
}

form.addEventListener("input", validateForm);

function validateForm() {
  let valid =
    nameInput.value.trim().length >= 3 &&
    +studyInput.value >= 5 &&
    +breakInput.value >= 2 &&
    +cyclesInput.value >= 1;

  startBtn.disabled = !valid;
}

function startAutosave() {
  autosaveInterval = setInterval(() => {
    localStorage.setItem("current", JSON.stringify(state));
    document.getElementById("autosave").textContent = "Progress saved";
  }, 1000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  state.session = {
    name: nameInput.value.trim(),
    studyMinutes: +studyInput.value,
    breakMinutes: +breakInput.value,
    cycles: +cyclesInput.value,
  };

  state.runtime = {
    phase: "studying",
    cycle: 0,
    remaining: state.session.studyMinutes * 60,
    total: state.session.studyMinutes * 60,
    paused: false,
  };

  document.getElementById("form-section").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  startTimer();
  startAutosave();
});

function startTimer() {
  clearInterval(timerInterval);

  updateUI();

  timerInterval = setInterval(() => {
    if (state.runtime.paused) return;

    state.runtime.remaining--;

    if (state.runtime.remaining <= 0) {
      state.runtime.remaining = 0;
      updateUI();
      nextPhase();
      return;
    }

    updateUI();
  }, 100);
}

function nextPhase() {
  if (state.runtime.phase === "studying") {
    if (state.runtime.cycle < state.session.cycles) {
      state.runtime.phase = "break";
      state.runtime.remaining = state.session.breakMinutes * 60;
      state.runtime.total = state.runtime.remaining;
    } else {
      completeSession();
      return;
    }
  } else {
    state.runtime.cycle++;
    state.runtime.phase = "studying";
    state.runtime.remaining = state.session.studyMinutes * 60;
    state.runtime.total = state.runtime.remaining;
  }
}

function updateUI() {
  const phaseTitle = document.getElementById("phase-title");

  phaseTitle.textContent =
    state.runtime.phase === "studying"
      ? "Studying"
      : state.runtime.phase === "break"
      ? "Break"
      : "Completed";

  const mins = Math.floor(state.runtime.remaining / 60);
  const secs = state.runtime.remaining % 60;

  document.getElementById("timer").textContent = `${String(mins).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;

  document.getElementById("cycle-info").textContent = `Study ${
    state.runtime.cycle + 1
  } of ${state.session.cycles + 1}`;

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = `${
      100 - (state.runtime.remaining / state.runtime.total) * 100
    }%`;
  }
}

pauseBtn.onclick = () => {
  state.runtime.paused = !state.runtime.paused;
  document.getElementById("paused-text").classList.toggle("hidden");
  pauseBtn.textContent = state.runtime.paused ? "Resume" : "Pause";
};

function completeSession() {
  clearInterval(timerInterval);
  clearInterval(autosaveInterval);

  state.history.push({
    name: state.session.name,
    completed: true,
    time: state.session.studyMinutes * (state.session.cycles + 1),
  });

  localStorage.setItem("ff-history", JSON.stringify(state.history));
  localStorage.removeItem("current");

  updateHistory();
  document.getElementById("phase-title").textContent = "Session Complete 🎉";
}

function updateHistory() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";

  state.history.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = `${h.name} — ${h.time} mins`;
    list.appendChild(li);
  });
}

updateHistory();
