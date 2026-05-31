export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.text(850, 500, 'GAME OVER', {
            fontFamily: 'Arial Black', fontSize: 130, color: '#ffffff',
            stroke: '#000000', strokeThickness: 11, align: 'center'
        });

        const restartButton = this.add.text(970, 880, 'Click to Restart', {
            fontFamily: 'Arial Black',
            fontSize: 70,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 11,
            align: 'center'
        });

        // 2. Make the text object interactive (clickable)
        restartButton.setInteractive({ useHandCursor: true });

        // 3. Add hover effects so the player knows it's a button
        restartButton.on('pointerover', () => {;
            restartButton.setStyle({ fill: '#ffff00' }); // Turns yellow on hover
        });

        restartButton.on('pointerout', () => {
            restartButton.setStyle({ fill: '#ffffff' }); // Turns back to white
        });

        // 4. Set up the click event to switch scenes
        restartButton.on('pointerdown', () => {
            // Stop this scene and start the Game scene fresh
            this.scene.start('Game');
        })

    }
}
