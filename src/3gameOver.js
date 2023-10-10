class GameOver extends Phaser.Scene{
    constructor(){
        super({key: 'gameOver'})
    }

    create(){
        gameState.isOver = true
        gameState.onMenu = false
        gameState.onGame = false
        this.gameOverBg = this.add.image(game.config.width / 2, game.config.height / 2, 'gameOverBg').setOrigin(0.5)
        this.gameOverBg.setDisplaySize(game.config.width, game.config.height)
        this.loseSound = this.sound.add('lose', {loop: false, volume: 0.3});
        this.loseSound.play()
        this.selector = this.add.sprite(game.config.width / 2, game.config.height / 2+56, 'selector')
        this.selector.setOrigin(0.5)
        this.btnRestart = this.add.sprite(game.config.width / 2, game.config.height / 2+56, 'restartSelected')
        this.btnRestart.setOrigin(0.5)
        this.btnClose = this.add.sprite(this.btnRestart.x, this.btnRestart.y + 130, 'exitEmpty')
        this.btnClose.setOrigin(0.5)

        this.cntrlInfo = this.add.image(260, game.config.height - 60, 'contrl_Info_menu').setOrigin(0.5)

        this.btnRestart.setInteractive()
        this.btnClose.setInteractive()

        
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)&&gameState.isOver){
                this.exit()
            }
        })
        

        this.btnRestart.on('pointerdown', this.startGame, this)
        this.btnClose.on('pointerdown', this.exit, this)

        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this)

        this.saveScore();
        this.loadScore();
        //this.versionText = this.add.text(game.config.width - 60, game.config.height - 40, `${game_version}`, { fontFamily:'Arial', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
        this.score = this.add.text(game.config.width/2-150, game.config.height - 100, `${gameState.score}`, { fontFamily:'Rubik-Regular', fontStyle:'bold', fontSize: '64px', fill: '#313131' }).setOrigin(0.5);
        this.scoreTitle = this.add.text (this.score.x, this.score.y - 75, "Счёт", {
            fontFamily: 'Rubik-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            color: '#313131',
        }).setOrigin(0.5);

        this.versionText = this.add.text(game.config.width - 100, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
    }

    saveScore(){
        this.heighScore = gameState.score;
        this.oldScore = JSON.parse(localStorage.getItem('heighScore_wolf'));
        this.heighScore > this.oldScore ? localStorage.setItem('heighScore_wolf', JSON.stringify(this.heighScore)) : this.heighScore = this.oldScore;
    }

    loadScore(){
        if(localStorage.getItem('heighScore_wolf')){
            this.heigScoreText = this.add.text(game.config.width / 2 + 150, game.config.height - 100,`${JSON.parse(localStorage.getItem('heighScore_wolf'))}`, {
                fontFamily: 'Rubik-Regular',
                fontSize: 64,
                fontStyle: 'bold',
                color: '#313131',
                align: 'center'
            }).setOrigin(0.5);

            this.heigScoreTitle = this.add.text(this.heigScoreText.x, this.heigScoreText.y - 75, "Рекорд", {
                fontFamily: 'Rubik-Regular',
                fontSize: 48,
                fontStyle: 'normal',
                color: '#313131',
            }).setOrigin(0.5);

            this.line = this.add.image(game.config.width / 2, game.config.height - 120, 'line').setOrigin(0.5);
        }
    }

    selectorDown(){
        if(gameState.isOver==true){
            if(this.selector.y != this.btnClose.y){
              this.selector.y = this.btnClose.y
              this.btnClose.setTexture('exitSelected')
              this.btnRestart.setTexture('restartEmpty')
            }
        }
    }

    selectorUp(){
        if(gameState.isOver==true){
            if(this.selector.y != this.btnRestart.y){
                this.selector.y = this.btnRestart.y
                this.btnRestart.setTexture('restartSelected')
                this.btnClose.setTexture('exitEmpty')
            }
        }
    }

    gameToggle(){
        if(gameState.isOver == true){
            if(this.selector.y == this.btnRestart.y){
                this.startGame()
            }
            else if(this.selector.y == this.btnClose.y){
                
                this.exit()
            }
        }
    }

    startGame(){
        gameState.isOver = false
        gameState.score = 0
        gameState.lives = 3

        startGame.gameSessionId = uid();
        startGame.allGameSessionId = sessionID;
        window?.parent.postMessage(startGame, '*');
        console.log(`started game w: allGame - ${startGame.allGameSessionId} and gameId - ${startGame.gameSessionId}`);

        this.scene.start(playgame)
        this.scene.stop()
    }
    exit(){
        let closeGameSession = {
            action: 'closeGameSession',
            allGameSessionId : sessionID,
            timeStamp : Date.now()
        }

        window?.parent.postMessage(closeGameSession, '*');
    }
}

var gameOver = new GameOver()