export class PauseMenu extends Phaser.Scene {
    constructor() {
        super('PauseMenu');
    }

    create() {
        // 1. Create a semi-transparent dark rectangle covering the screen
        const overlay = this.add.rectangle(1280, 832, 2560, 1664, 0x000000, 0.6);

        // 2. Add "Game Paused" text
        this.add.text(1280, 600, 'PAUSED', {
            fontFamily: 'Arial Black', fontSize: 98, color: '#8367e0',
            stroke: '#000000', strokeThickness: 11
        }).setOrigin(0.5);

        // 3. Create a Resume Button
        const resumeButton = this.add.text(1280, 800, 'Resume Game', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 11, padding: { x: 10, y: 10 }
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        // Button Hover Effects
        resumeButton.on('pointerover', () => resumeButton.setStyle({ fill: '#ffff00' }));
        resumeButton.on('pointerout', () => resumeButton.setStyle({ fill: '#ffffff' }));

        // Action: Resume the game when clicked
        resumeButton.on('pointerdown', () => {
            this.resumeGame();
        });

        // 4. Also listen for the ESC key to resume the game
        this.input.keyboard.on('keydown-ESC', () => {
            this.resumeGame();
        });


        // RESTART BUTTON

        const restartButton = this.add.text(1280, 930, 'Click to Restart', {
            fontFamily: 'Arial Black',
            fontSize: 64,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 11,
            align: 'center',
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        // Add hover effects so the player knows it's a button
        restartButton.on('pointerover', () => {;
            restartButton.setStyle({ fill: '#ffff00' }); // Turns yellow on hover
        });

        restartButton.on('pointerout', () => {
            restartButton.setStyle({ fill: '#ffffff' }); // Turns back to white
        });

        // Set up the click event to switch scenes
        restartButton.on('pointerdown', () => {
            // Stop this scene and start the Game scene fresh
            this.scene.start('Game');
        })
    }

    resumeGame() {
        // Tell the Scene Manager to unfreeze 'Game' and shut down 'PauseMenu'
        this.scene.resume('Game');
        this.scene.stop();
    }
}