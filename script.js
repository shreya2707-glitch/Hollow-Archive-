/* ============================================================
   1. STORY DATA (Node Graph & Endings)
   ============================================================ */
const STORY = {
  start: {
    speaker: "",
    mood: "warm",
    text: "Rain on old stone. You are Isra Venn, an archivist of the Ashglass Repository — a library built into a hollowed cliff, where the dead sometimes leave their books unfinished.\n\nTonight the Repository's senior scholar, <em>Master Corvin Rell</em>, has not answered his bell in three days. His study door is locked from the inside.",
    next: "n1"
  },

  n1: {
    speaker: "",
    mood: "warm",
    text: "You stand before his door with a lantern and a set of brass keys that shouldn't exist. The wax seal on the doorframe — the Repository's own ward — has been broken, not by force, but from the <em>inside</em>.",
    choices: [
      { label: "Break the ward yourself and enter", next: "n2_enter" },
      { label: "Search his desk logs in the reading hall first", next: "n2_logs" }
    ]
  },

  n2_enter: {
    speaker: "",
    mood: "tense",
    text: "You press your palm to the broken seal. It's cold — colder than wax should ever be. The door swings open on its own, as if it had been waiting only for you.\n\nThe study is empty. Every book on Corvin's shelves has been turned backward, spines to the wall, pages facing out — thousands of blank white edges, like teeth.",
    next: "n3"
  },

  n2_logs: {
    speaker: "",
    mood: "warm",
    text: "In the reading hall you find Corvin's last requisition slip: he'd asked for a text from the Repository's <em>sealed</em> collection — books too dangerous to be read twice by the same person. The slip is dated the night he vanished.",
    next: "n3_logs2"
  },

  n3_logs2: {
    speaker: "",
    mood: "warm",
    text: "A note is pinned beneath it, in Corvin's hand: <em>\"If I do not return the volume by dawn, do not follow the voice that sounds like me.\"</em>",
    next: "n3"
  },

  n3: {
    speaker: "",
    mood: "tense",
    text: "A draft moves through the corridor that shouldn't exist — the Repository has no windows this deep. It carries a voice, faint and familiar, calling your name from the stacks below.",
    choices: [
      { label: "Follow the voice down into the stacks", next: "n4_follow" },
      { label: "Refuse, and light every lamp in the hall instead", next: "n4_refuse" }
    ]
  },

  n4_follow: {
    speaker: "",
    mood: "tense",
    text: "You descend. The voice grows clearer with each step, warm and rasping, exactly Corvin's — until you round the last shelf and find only a mirror of black glass, propped where no mirror has ever stood, and your own reflection <em>smiling before you do</em>.",
    next: "n5_mirror"
  },

  n4_refuse: {
    speaker: "",
    mood: "warm",
    text: "You trust the note over the voice. Lamp by lamp, you push back the dark — and by the third lamp, the calling stops, as if something had lost patience and gone looking elsewhere for an easier door.",
    next: "n5_lamps"
  },

  n5_mirror: {
    speaker: "The Glass",
    mood: "tense",
    text: "\"You always were better at finding things than I was,\" it says, in Corvin's voice, through Corvin's smile. \"Come find me properly, Isra. I'm still in here. Somewhere.\"",
    choices: [
      { label: "Touch the glass", next: "end_bound_setup" },
      { label: "Recite the Repository's binding ward at it", next: "n6_ward" },
      { label: "Drive the impossible brass key into the crack", next: "end_escape" }
    ]
  },

  n6_ward: {
    speaker: "",
    mood: "magic",
    text: "You speak the old ward — the one carved above every Repository door — and the glass shudders like water struck by a stone. The smiling reflection cracks down the middle. Behind it, faint as breath on cold glass, you see Corvin's true face, eyes wide, mouthing one word: <em>\"Book.\"</em>",
    next: "n7_converge"
  },

  n5_lamps: {
    speaker: "",
    mood: "warm",
    text: "With the hall lit, you find what the dark had been hiding: a trail of ash leading to the sealed collection's vault — its door standing open for the first time in forty years.",
    next: "n7_converge"
  },

  n7_converge: {
    speaker: "",
    mood: "magic",
    text: "At the vault you find it: the sealed volume Corvin borrowed, lying open on a reading stand, its pages still turning by themselves in a wind that isn't there. The book's title, in old Repository script, reads: <em>\"A Record of Those Who Read Too Well.\"</em>",
    choices: [
      { label: "Close the book", next: "end_truth" },
      { label: "Read the open page aloud, to call him back", next: "end_escape_check" }
    ]
  },

  end_escape_check: {
    speaker: "",
    mood: "magic",
    text: "You read the page aloud. The wind in the room answers — and Corvin's voice, or something wearing it, answers back from everywhere at once: <em>\"Careful. That's how I got in too.\"</em>",
    choices: [
      { label: "Keep reading, and reach for him through the words", next: "end_bound" },
      { label: "Stop, and slam the book shut instead", next: "end_truth" }
    ]
  },

  end_bound_setup: {
    speaker: "",
    mood: "tense",
    text: "You touch the black glass. It is not cold, as glass should be — it is warm, like a hand that has been waiting to be held.",
    next: "end_bound"
  },

  /* ---------------- ENDINGS ---------------- */

  end_truth: {
    ending: "The Reader's Ending",
    speaker: "",
    mood: "warm",
    text: "You close the book. Somewhere behind the sealed vault's silence, you hear — faintly, once — Corvin's actual laugh, relieved, before it fades like a candle pinched out on purpose.\n\nHe is never found. But the ash trail stops that night, and no bell in the Repository ever rings unanswered again. You take his old desk, and his old warning, and you never once read a sealed book twice.",
    ending_final: true
  },

  end_bound: {
    ending: "The Bound Ending",
    speaker: "",
    mood: "tense",
    text: "The words pull you in the way deep water pulls a stone. You find him there, in the space between pages — not lost, exactly, but <em>filed</em>, the way the Repository files everything it isn't ready to let go of.\n\nYou both make it back out. But something of the book's hush follows you home, and now, some nights, it is your voice that calls softly from the stacks, and you are not entirely sure it is only yours.",
    ending_final: true
  },

  end_escape: {
    ending: "The Locksmith's Ending",
    speaker: "",
    mood: "magic",
    text: "You do not read, and you do not touch the glass. You drive the impossible brass key into the mirror's hairline crack and turn it backward, the way you'd turn a key in any ordinary lock.\n\nThe reflection shatters into silent dust. Corvin stumbles out from behind it — exhausted, grey at the temples now, but entirely, ordinarily human. You lock the sealed vault yourself that night, and throw the keys that shouldn't exist into the chasm below the cliff, where the Repository keeps its other unanswerable things.",
    ending_final: true
  }
};

/* ============================================================
   2. DOM ELEMENTS & ENGINE STATE
   ============================================================ */
const el = {
  stage: document.getElementById('stage'),
  speaker: document.getElementById('speaker'),
  text: document.getElementById('vn-text'),
  choices: document.getElementById('choices'),
  hint: document.getElementById('advance-hint'),
  restartWrap: document.getElementById('restart-wrap'),
  restartBtn: document.getElementById('restart-btn'),
  endingTag: document.getElementById('ending-tag'),
  logBtn: document.getElementById('log-btn'),
  logPanel: document.getElementById('log-panel'),
};

const modal = {
  backdrop: document.getElementById('code-modal'),
  title: document.getElementById('modal-title'),
  desc: document.getElementById('modal-desc'),
  input: document.getElementById('save-code-input'),
  actionBtn: document.getElementById('modal-action-btn'),
  closeBtn: document.getElementById('modal-close-btn'),
  saveBtn: document.getElementById('save-btn'),
  loadBtn: document.getElementById('load-btn')
};

let typing = null;
let currentNode = null;
let currentFullHTML = "";
let currentOnDone = null;
let history = [];

/* ============================================================
   3. VISUAL NOVEL CORE RENDERING & TYPEWRITER
   ============================================================ */
function setMood(mood) {
  el.stage.className = 'mood-' + (mood || 'warm');
  if (mood === 'tense') {
    el.stage.classList.add('shake');
    setTimeout(() => el.stage.classList.remove('shake'), 350);
  }
}

// Tokenize HTML so tags (<em>, <br>) are rendered as complete units
function tokenize(html) {
  return html.match(/<[^>]+>|[^<]/g) || [];
}

function typeText(html, done) {
  clearInterval(typing);
  typing = null;
  currentFullHTML = html;
  currentOnDone = done;
  const tokens = tokenize(html);
  let i = 0;
  el.text.innerHTML = "";

  typing = setInterval(() => {
    i++;
    el.text.innerHTML = tokens.slice(0, i).join("");
    if (i >= tokens.length) {
      finishTyping();
    }
  }, 14);
}

function finishTyping() {
  clearInterval(typing);
  typing = null;
  el.text.innerHTML = currentFullHTML;
  if (currentOnDone) {
    const cb = currentOnDone;
    currentOnDone = null;
    cb();
  }
}

function renderNode(id) {
  currentNode = id;
  const node = STORY[id];
  setMood(node.mood);
  el.speaker.textContent = node.speaker || "";
  el.choices.innerHTML = "";
  el.hint.style.display = "none";
  el.restartWrap.style.display = "none";
  el.endingTag.style.display = "none";

  if (node.ending) {
    el.endingTag.style.display = "block";
    el.endingTag.textContent = node.ending;
  }

  const html = node.text.replace(/\n/g, "<br><br>");
  history.push({ speaker: node.speaker || "", html });
  renderLog();

  typeText(html, () => {
    if (node.ending_final) {
      el.restartWrap.style.display = "block";
      return;
    }
    if (node.choices) {
      node.choices.forEach((c, idx) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c.label;
        btn.onclick = () => {
          playChime(idx);
          renderNode(c.next);
        };
        el.choices.appendChild(btn);
      });
    } else if (node.next) {
      el.hint.style.display = "block";
      el.hint.onclick = () => renderNode(node.next);
    }
  });
}

/* ============================================================
   4. USER INPUT & CONTROLS (Click, Keyboard, Log)
   ============================================================ */

// Text click: instant skip if typing, advance if linear
el.text.onclick = () => {
  if (modal.backdrop.style.display === 'flex') return;
  if (typing) {
    finishTyping();
  } else {
    const node = STORY[currentNode];
    if (node.next && !node.choices && !node.ending_final) {
      renderNode(node.next);
    }
  }
};

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (modal.backdrop.style.display === 'flex') return;

  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    if (typing) {
      finishTyping();
      return;
    }
    const node = STORY[currentNode];
    if (node.next && !node.choices && !node.ending_final) {
      renderNode(node.next);
    }
    return;
  }

  const num = parseInt(e.key, 10);
  if (!isNaN(num) && num >= 1 && num <= 9) {
    const btns = el.choices.querySelectorAll('.choice-btn');
    if (btns[num - 1]) btns[num - 1].click();
  }
});

// Backlog modal
function renderLog() {
  el.logPanel.innerHTML = history.map(h =>
    `<div class="log-entry">${h.speaker ? `<div class="log-speaker">${h.speaker}</div>` : ""}${h.html}</div>`
  ).join("");
  if (el.logPanel.classList.contains('open')) {
    el.logPanel.scrollTop = el.logPanel.scrollHeight;
  }
}

el.logBtn.onclick = () => {
  el.logPanel.classList.toggle('open');
  if (el.logPanel.classList.contains('open')) {
    el.logPanel.scrollTop = el.logPanel.scrollHeight;
  }
};

el.restartBtn.onclick = () => {
  history = [];
  renderNode('start');
};

/* ============================================================
   5. SAVE / LOAD SYSTEM (Base64 Encoding)
   ============================================================ */
function generateSaveCode() {
  const payload = {
    v: 1,
    node: currentNode,
    history: history,
    timestamp: Date.now()
  };
  try {
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  } catch (e) {
    return btoa(JSON.stringify({ v: 1, node: currentNode, history: [] }));
  }
}

function applySaveCode(codeStr) {
  try {
    const raw = decodeURIComponent(escape(atob(codeStr.trim())));
    const data = JSON.parse(raw);
    if (!data.node || !STORY[data.node]) throw new Error("Invalid Node ID");

    history = Array.isArray(data.history) ? data.history : [];
    renderLog();
    renderNode(data.node);
    return true;
  } catch (err) {
    alert("Invalid save code string. Please verify the copied code.");
    return false;
  }
}

modal.saveBtn.onclick = () => {
  const code = generateSaveCode();
  modal.title.textContent = "Archive Bookmark (Save)";
  modal.desc.textContent = "Copy this code to preserve your exact position in the archive:";
  modal.input.value = code;
  modal.input.readOnly = true;
  modal.actionBtn.textContent = "Copy Code";
  modal.actionBtn.onclick = () => {
    navigator.clipboard.writeText(code);
    modal.actionBtn.textContent = "Copied!";
    setTimeout(() => { modal.actionBtn.textContent = "Copy Code"; }, 1600);
  };
  modal.backdrop.style.display = "flex";
};

modal.loadBtn.onclick = () => {
  modal.title.textContent = "Restore Bookmark (Load)";
  modal.desc.textContent = "Paste an archive code below to resume reading:";
  modal.input.value = "";
  modal.input.readOnly = false;
  modal.actionBtn.textContent = "Restore";
  modal.actionBtn.onclick = () => {
    if (applySaveCode(modal.input.value)) {
      modal.backdrop.style.display = "none";
    }
  };
  modal.backdrop.style.display = "flex";
};

modal.closeBtn.onclick = () => {
  modal.backdrop.style.display = "none";
};

/* ============================================================
   6. PROCEDURAL AUDIO (Web Audio API)
   ============================================================ */
let audioCtx = null;

function playChime(choiceIndex) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const freqs = [523.25, 466.16, 415.30, 392.00];
    const freq = freqs[choiceIndex % freqs.length];
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (e) {}
}

document.addEventListener('pointerdown', () => {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}, { once: true });

/* ============================================================
   7. AMBIENT EMBER MOTES (HTML5 Canvas)
   ============================================================ */
(function embers() {
  const canvas = document.getElementById('ember-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, motes = [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    w = canvas.width = el.stage.clientWidth;
    h = canvas.height = el.stage.clientHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function spawn() {
    const count = reduceMotion ? 0 : 24;
    motes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: h + Math.random() * 40,
      r: 0.6 + Math.random() * 1.6,
      speed: 0.25 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: 0.15 + Math.random() * 0.35
    }));
  }
  spawn();

  function colorForMood() {
    if (el.stage.classList.contains('mood-magic')) return '79,154,143'; // wisplight
    if (el.stage.classList.contains('mood-tense')) return '107,39,55';  // embercoal
    return '212,172,110'; // brass
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    const rgb = colorForMood();
    motes.forEach(m => {
      m.y -= m.speed;
      m.x += m.drift;
      if (m.y < -10) {
        m.y = h + 10;
        m.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${rgb},${m.alpha})`;
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    });
    if (!reduceMotion) requestAnimationFrame(tick);
  }
  if (!reduceMotion) requestAnimationFrame(tick);
})();

/* ============================================================
   8. INITIALIZATION
   ============================================================ */
renderNode('start');