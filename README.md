# Hollow-Archive-
The Hollow Archive is a browser-based, zero-dependency visual novel and interactive fiction engine built entirely with vanilla HTML5, CSS3, and JavaScript (ES6+).
# 🕯️ The Hollow Archive

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript_ES6+-f7df1e.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic_DOM-e34f26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572b6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Audio API](https://img.shields.io/badge/Audio-Web_Audio_API-4f9a8f.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen.svg)]()

> A lightweight, zero-dependency visual novel and interactive fiction engine built entirely in vanilla HTML5, CSS3, and JavaScript (ES6+).

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Story Premise](#-story-premise)
- [Key Features](#-key-features)
- [Technical Architecture](#-technical-architecture)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Controls & Shortcuts](#-controls--shortcuts)
- [Engine Highlights](#-engine-highlights)
  - [Tokenized Typewriter](#1-tokenized-typewriter)
  - [Zero-Asset Procedural Audio](#2-zero-asset-procedural-audio)
  - [Sandbox-Safe Persistence](#3-sandbox-safe-save--load)
- [Customization & Extensibility](#-customization--extensibility)
- [Browser Compatibility](#-browser-compatibility)
- [License](#-license)

---

## 📖 Overview

**The Hollow Archive** is an atmospheric, client-side interactive narrative game that pairs branching dark fantasy storytelling with procedural browser audio and dynamic canvas visual effects. Designed without external build tools, bundlers, or heavy libraries, it executes natively across modern desktop and mobile browsers.

---

## 📜 Story Premise

The setting is the **Ashglass Repository**, a subterranean library carved deep into coastal cliffs where the dead leave unfinished manuscripts.

You play as **Isra Venn**, an archivist investigating the sudden disappearance of senior scholar **Master Corvin Rell**. His study has remained locked from the inside for three days, yet the magical seal on the doorframe has been broken from within. As you descend into the forbidden lower vaults, you encounter a black glass mirror that speaks in Corvin's voice and a forbidden tome titled *"A Record of Those Who Read Too Well."*

### Reachable Endings:
1. **The Reader's Ending:** Close the tome, seal the vault, and preserve the library's quiet order.
2. **The Bound Ending:** Reach into the text to rescue the scholar, only to emerge permanently marked by the words.
3. **The Locksmith's Ending:** Reject both book and mirror, driving an impossible brass key into the glass to free Corvin into the mortal realm.

---

## ✨ Key Features

- **Branching Node Graph:** State-driven story graph supporting linear narrative beats, multi-choice decision forks, and multiple endings.
- **Smart Typewriter System:** Token-aware parsing algorithm renders complete HTML tags (`<em>`, `<br>`) as atomic blocks to prevent layout jitter and DOM tag mangling during typing animations.
- **Procedural Audio Synthesis:** Real-time generation of decaying sine-wave chimes on choice selections using the **Web Audio API** (zero `.mp3`/`.wav` assets required).
- **Dynamic Ambience & HTML5 Canvas Particles:**
  - Real-time CSS lighting variants (`warm`, `tense`, `magic`).
  - Canvas 2D particle loop rendering drifting ember motes that adapt their color to active scene tension.
  - Camera screen-shake keyframes on suspenseful moments.
- **Dialogue History Log:** Slide-out modal containing a chronological transcript of previous dialogue lines and speaker tags.
- **Sandbox-Safe Save/Load System:** Obfuscates game state and dialogue history into portable **Base64 strings**, ensuring persistence in sandboxed iframes, local `file://` environments, and webviews.
- **Keyboard Navigation & Accessibility:** Native support for `Space`, `Enter`, and numeric keys `1`–`9`.

---

## 📐 Technical Architecture

```text
+------------------------------------------------------------------+
|                            USER INPUT                            |
|       (Mouse Clicks | Space/Enter | Numeric Keys 1-9)           |
+---------------------------------+--------------------------------+
                                  |
                                  v
+---------------------------------+--------------------------------+
|                          ENGINE ROUTER                           |
|                      (script.js: renderNode)                     |
+--------+------------------------+-----------------------+--------+
         |                        |                       |
         v                        v                       v
+--------+--------+      +--------+--------+     +--------+--------+
|  STORY GRAPH    |      |  TYPEWRITER     |     |  WEB AUDIO API  |
|  (State Nodes)  |      |  (Token Parser) |     |  (Sine Chimes)  |
+--------+--------+      +--------+--------+     +-----------------+
         |                        |
         v                        v
+--------+--------+      +--------+--------+
|  HISTORY LOG    |      |  DOM / CSS      |
|  (Backlog Array)|      |  (Theme & UI)   |
+--------+--------+      +--------+--------+
         |                        |
         v                        v
## 📁 Project Structure

```text
the-hollow-archive/
├── index.html       # Markup structure, modal layers, canvas, and layout
├── style.css        # Custom CSS variables, typography, keyframes, and themes
├── script.js        # Story state machine, typewriter, audio, and particle engine
└── README.md        # Documentation
+--------+--------+      +--------+--------+
|  BASE64 ENGINE  |      | CANVAS 2D LOOP  |
|  (Save / Load)  |      | (Ember Motes)   |
+-----------------+      +-----------------+
🚀 Quick StartNo package managers, build configurations, or dependencies are required.1. Clone the repositoryBashgit clone [https://github.com/your-username/the-hollow-archive.git](https://github.com/your-username/the-hollow-archive.git)
cd the-hollow-archive
2. LaunchDirect Execution: Double-click index.html to open the game in your default browser.Local Server (Optional):Bash# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
🎮 Controls & ShortcutsActionControlAdvance / Skip LineLeft Click or Space / EnterSelect ChoiceClick Button or Number Keys 1–9View BacklogClick the LOG buttonSave BookmarkClick SAVE → Copy the generated Base64 stringLoad BookmarkClick LOAD → Paste the Base64 string → Click Restore💡 Engine Highlights1. Tokenized TypewriterStandard typewriter loops slice strings character-by-character, inadvertently breaking HTML tags (<e, <br) and triggering browser layout repaints. The engine tokenizes strings before animating:JavaScriptfunction tokenize(html) {
  return html.match(/<[^>]+>|[^<]/g) || [];
}
2. Zero-Asset Procedural AudioSound is synthesized on demand without network overhead:JavaScriptfunction playChime(choiceIndex) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const freqs = [523.25, 466.16, 415.30, 392.00];
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freqs[choiceIndex % freqs.length], audioCtx.currentTime);
  gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
}
3. Sandbox-Safe Save / LoadTo ensure compatibility in strict environments where localStorage is disabled or throws origin errors (such as file:/// or sandboxed iframes), states are serialized via Base64:JavaScriptfunction generateSaveCode() {
  const payload = { v: 1, node: currentNode, history: history, timestamp: Date.now() };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}
🛠️ Customization & ExtensibilityAdding new scenes to the game is as simple as inserting a new node into the STORY object in script.js:JavaScriptmy_custom_node: {
  speaker: "Isra Venn",
  mood: "magic", // Options: "warm", "tense", "magic"
  text: "The ink on the parchment began to glow with a faint wisplight hue.",
  choices: [
    { label: "Step closer to read", next: "next_node_a" },
    { label: "Step away and draw your lantern", next: "next_node_b" }
  ]
}
🌐 Browser CompatibilityBrowserVersionSupport StatusGoogle Chrome70+Full SupportMozilla Firefox65+Full SupportApple Safari12+Full SupportMicrosoft Edge79+Full SupportMobile BrowsersiOS Safari / Chrome AndroidFull Support📜 LicenseThis project is open-source and released under the MIT License.
