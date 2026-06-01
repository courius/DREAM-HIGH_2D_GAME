# DREAM-HIGH_2D_GAME
# 2D Arcade Platformer (Phaser 3)

A classic 2D arcade platformer built using the **Phaser 3** framework and modern **ES6 JavaScript modules**. This project was developed as a hands-on introduction to game loop mechanics, state management, and HTML5 canvas rendering.

The player controls a character who must navigate platforms, collect stars to score points, and dodge dynamically spawning bombs that increase in difficulty as the game progresses.

---

## 🛠️ Key Technical Features & Architecture

This project is written with a highly organized, modular scene structure designed for scalability:

* **State Management (Scenes):** Utilizes separate Phaser Scenes (`Boot`, `Preloader`, `MainMenu`, `Game`, `PauseMenu`, and `GameOver`) to cleanly isolate game states.
* **Parallel Scenes:** Implements an asynchronous Escape/Pause menu overlay by launching a separate control scene over the frozen physics loop of the main game.
* **Object-Oriented Architecture:** Extends the native `Phaser.Physics.Arcade.Sprite` class to build a dedicated, self-contained `Player` object with its own input handling and animation states.
* **Dynamic Difficulty Scaling:** Uses Arcade Physics groups to dynamically compute, scale, and spawn localized hazards (bombs) based on the current player position and score.
* **Asset Management:** Uses modular spritesheets mapped dynamically onto customized physics hitboxes to handle custom character sizing and layout spacing.

---

## 🎮 How to Play

* **Left / Right Arrow Keys:** Move character left and right.
* **Up Arrow Key:** Jump.
* **ESC Key:** Pause / Resume the game.
* **Objective:** Collect all the stars to rack up points while avoiding the bouncing bombs. Every time you clear the stars, a new bomb spawns!

---

## 💻 Tech Stack

* **Engine:** Phaser 3 (Arcade Physics Engine)
* **Language:** Vanilla JavaScript (ES6+ Modules)

---

## 🔧 Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/courius/DREAM-HIGH_2D_GAME.git](https://github.com/courius/DREAM-HIGH_2D_GAME.git)
