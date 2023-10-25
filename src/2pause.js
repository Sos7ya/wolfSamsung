class ScenePause extends Phaser.Scene{
    constructor(){
        super({key: 'pause'})
    }

    create(){


        gameState.onPause = true
        gameState.onMenu = false
        gameState.onGame = false

        try{
            let gamePause = {
                action: 'gamePause',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePause, '*');
        }
        catch(er){
            let gamePauseError = {
                action: 'gamePauseError',
                allGameSessionId: startGame.allGameSessionId,
                gameSessionId: startGame.gameSessionId,
                score: gameState.score,
                timeStamp : Date.now()
            }
    
            window?.parent.postMessage(gamePauseError, '*');
        }

        this.pauseBg = this.add.image(game.config.width / 2, game.config.height / 2, 'pauseBg')
        this.pauseBg.setOrigin(0.5)
        this.pauseBg.setDisplaySize(game.config.width, game.config.height)

        this.selector = this.add.image(game.config.width / 2, game.config.height / 2+56, "selector").setOrigin(0.5)
        this.btnStart = this.add.sprite(game.config.width / 2, game.config.height / 2+56, 'resumeSelected');
        this.btnStart.setOrigin(0.5)
        this.cntrlInfo = this.add.image(260, game.config.height - 60, 'contrl_Info_menu').setOrigin(0.5)
        this.btnClose = this.add.sprite(this.btnStart.x, this.btnStart.y + 130, 'exitEmpty');

        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)){
                this.exit()
            }
        })
        
        this.btnStart.setInteractive()
        this.btnClose.setInteractive()
        this.btnClose.on('pointerdown', this.exit, this)
        this.btnStart.on('pointerdown', this.resumeGame, this)

        this.input.keyboard.on('keydown-ENTER', this.gameToggle, this)
        this.loadScore();
        this.score = this.add.text(game.config.width/2-150, game.config.height - 100, `${gameState.score}`, { fontFamily:'Rubik-Regular', fontStyle:'bold', fontSize: '64px', fill: '#313131' }).setOrigin(0.5);
        this.scoreTitle = this.add.text (this.score.x, this.score.y - 75, "Счёт", {
            fontFamily: 'Rubik-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            color: '#313131',
        }).setOrigin(0.5);

        this.versionText = this.add.text(game.config.width - 100, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
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
        if(gameState.onPause == true){
            if(this.selector.y != this.btnClose.y){
              this.selector.y = this.btnClose.y
              this.btnClose.setTexture('exitSelected')
              this.btnStart.setTexture('resumeEmpty')
            }
        }
    }

    selectorUp(){
        if(gameState.onPause == true){
            if(this.selector.y != this.btnStart.y){
                this.selector.y = this.btnStart.y
                this.btnStart.setTexture('resumeSelected')
                this.btnClose.setTexture('exitEmpty')
            }
        }
    }

    gameToggle(){
        if(gameState.onPause == true){
            if(this.selector.y == this.btnStart.y){
                this.resumeGame()
            }
            else if(this.selector.y == this.btnClose.y){
                this.exit()
            }
        }
    }

    resumeGame(){
        if(gameState.onPause == true){
            gameState.onPause = false
            gameState.onGame = true

            try{
                let gameResume = {
                    action: 'gameResume',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: gameState.score,
                    timeStamp : Date.now()
                }
    
                window?.parent.postMessage(gameResume, '*');
            }
            catch(er){
                let gameResumeError = {
                    action: 'gameResumeError',
                    allGameSessionId: startGame.allGameSessionId,
                    gameSessionId: startGame.gameSessionId,
                    score: gameState.score,
                    timeStamp : Date.now()
                }

                indow?.parent.postMessage(gameResumeError, '*');
            }

            this.scene.resume(playgame)
            this.scene.stop(scenepause)
        }
    }
    exit(){
        if(gameState.onPause){
            if(!posted){
                let closeGameSession = {
                    action: 'closeGameSession',
                    allGameSessionId : sessionID,
                    timeStamp : Date.now()
                }
                let gameOver = {
                    action: 'gameOver',
                    allGameSessionId : sessionID,
                    gameSessionId : startGame.gameSessionId,
                    score : gameState.score,
                    timeStamp : Date.now()
                }
        
                window?.parent.postMessage(gameOver, '*');
        
                window?.parent.postMessage(closeGameSession, '*');
                posted = true;
            }
        }
    }
}

var scenepause = new ScenePause()