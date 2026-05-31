export class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // Display the background image loaded during Boot/Preloader
        this.add.image(1280, 832, 'background').setScale(1.05);

        // --- CREATE THE PLAY BUTTON ---
        const playButton = this.add.text(1280, 900, 'PLAY', {
            fontFamily: 'Arial Black',
            fontSize: 130,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 11,
            align: 'center',
            padding: { x: 10, y: 10 }
        }).setOrigin(0.5);

        // Make it interactive with a hand cursor
        playButton.setInteractive({ useHandCursor: true });

        // Hover effects
        playButton.on('pointerover', () => {
            playButton.setStyle({ fill: '#00ff00' }); // Turns green on hover
        });

        playButton.on('pointerout', () => {
            playButton.setStyle({ fill: '#ffffff' }); // Turns back white
        });

        // Click event to start the actual game
        playButton.on('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}