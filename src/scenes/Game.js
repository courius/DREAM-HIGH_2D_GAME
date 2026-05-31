import { Player } from '../gameObjects/Player.js'

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');

    }

    create() {
        this.add.image(1280, 832, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(0 , 1431, 'ground').setScale(3.5).refreshBody();
        this.platforms.create(1280 , 1431, 'ground').setScale(3.5).refreshBody();


        this.platforms.create(0, 700, 'ground').body.updateFromGameObject();;
        this.platforms.create(500, 1000, 'ground').setScale(0.8).body.updateFromGameObject();
        this.platforms.create(1450, 750, 'singlep').body.updateFromGameObject();
        this.platforms.create(900, 550, 'singlep').setScale(0.7).body.updateFromGameObject();
        this.platforms.create(550, 250, 'ground').body.updateFromGameObject();
        this.platforms.create(2200, 950, 'singlep').setScale(0.9).body.updateFromGameObject();
        this.platforms.create(2300, 420, 'ground').body.updateFromGameObject();

        this.player = new Player(this, 600, 450);
        this.player.setScale(3);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 19,
            setXY: { x: 38, y: 0, stepX: 130}
        });

        this.stars.children.iterate(child =>
        {
            child.setScale(3);
            // Crucial for physics items: tell the physics body to update its size to match the new visual scale!
            child.body.updateFromGameObject();
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.score = 0;
        this.scoreText = this.add.text(1130, 100, 'Score: 0', { 
            fontFamily: 'Arial Black',
            fontSize: 70,
            fill: '#ffffff',
            stroke: '#000000',
            strokeThickness: 10,
            align: 'center'
            });

        this.bombs = this.physics.add.group();

        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

        // --- ADD ESCAPE BUTTON DETECTOR ---
        this.input.keyboard.on('keydown-ESC', () => {
            // Freeze the current Game update loop and physics
            this.scene.pause(); 
            
            // Launch the PauseMenu scene right over the top of this one
            this.scene.launch('PauseMenu'); 
        });
    }

    update(time) {
        if (this.cursors.left.isDown)
        {
            this.player.moveLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.player.moveRight();
        }
        else
        {
            this.player.idle();
        }

        if (this.cursors.up.isDown)
        {
            this.player.jump();
        }
    }

    collectStar (player, star)
    {
        star.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        if (this.stars.countActive(true) === 0)
        {
            this.stars.children.iterate(function (child)
            {
                child.enableBody(true, child.x, 0, true, true);
            });

            this.releaseBomb();
        }
    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.time.delayedCall(2000, () =>
        {
            this.scene.start('GameOver');
        });
    }

    releaseBomb()
    {
        var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = this.bombs.create(x, 300, 'bomb');

        bomb.setScale(3);
        bomb.body.updateFromGameObject(); // Adjusts the physics hitbox to match the giant size

        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-800, 800), 60);
    }
}
