var game;

var gameState = {
    onMenu:false,
    onPause: false,
    isOver: false,
    onGame: false,
    score: 0,
    lives: 3
}

var sessionID
var gameId = uid();

var position = 'left';
var game_version = 'v_0.1.9';
var physicsConfig = {
    default: 'matter',
    matter : {
        debug : false  //CHANGE THIS TO TRUE TO SEE LINES
    }
}

window.onload = function(){
    var config = {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        backgroundColor: '#bfcc00',
        parent: "phaser-example",
        scene:[preloader, mainmenu,playgame, scenepause, gameOver],
        physics: physicsConfig,
        scale: {
            mode: Phaser.Scale.FIT
        }    
    }


    sessionID = uid();
    var startGameSession = {
        action: 'startGameSession',
        allGameSessionId: sessionID,
        timeStamp: Date.now()
    }
    console.log(`session ${startGameSession.allGameSessionId} started!`);
    window?.parent.postMessage(startGameSession, '*');

game = new Phaser.Game(config);
}

class PlayGame extends Phaser.Scene{
    constructor(){
        super({key: 'playgame'})
    }

    create(){

        this.mainTheme = this.sound.add('mainMus', {loop: true, volume: 0.3});
        this.breakeEgg = this.sound.add('breakeEgg', {loop: false, volume: 0.3});
        this.catchEgg = this.sound.add('catchEgg', {loop: false, volume: 0.3});

        this.bg = this.add.image(game.config.width/2, game.config.height/2, 'bg').setOrigin(0.5)
        gameState.onGame = true
        gameState.onMenu = false
        this.mainTheme.play()
        const shapes = this.cache.json.get('shapes');
        this.hand = this.add.sprite(game.config.width/3, game.config.height/2.3+170, 'busket', null, {isStatic: true})
        this.handBody = this.matter.add.gameObject(this.hand, {
            isStatic: true,
            shape: {type: 'polygon', sides: 12, radius: 50},
        })
        this.handBody.rotation = -0.5

        this.hand.depth = 15
        this.handBody.name = 'handBody'
        this.hand.alpha = 0

        
        // this.damnCust = this.add.image(game.config.width-180, 500, 'damnCust2').setOrigin(0.5)
        this.platform1 = this.add.image(280, 440, 'plate_1')
        this.custick = this.add.image(170, 660, 'damnCust').setOrigin(0.5)
        this.damnCumCust = this.add.image(270, 830, 'damnCust1')
        this.platform2 = this.add.image(250, game.config.height - 345, 'plate_2')

        this.platform3 = this.add.image(game.config.width - 280, 450, 'plate_3')

        this.damnCust3 = this.add.image(game.config.width-240, 780, 'damnCust3')

        this.platform4 = this.add.image(game.config.width-253, game.config.height - 345, 'plate_4')

        this.leftSideBushes = this.add.image(270, game.config.height-200, 'leftSideBushes')
        this.rightSideBushes_0 = this.add.image(game.config.width-290, game.config.height-190, 'rightSideBushes_0')
        this.rightSideBushes_1 = this.add.image(game.config.width-210, game.config.height-150, 'rightSideBushes_1')

        this.custick.alpha = 0
        this.damnCumCust.alpha = 0
        this.damnCust3.alpha = 0
        this.leftSideBushes.alpha = 0
        this.rightSideBushes_0.alpha = 0
        this.rightSideBushes_1.alpha = 0



        this.chick1 = this.add.image(game.config.width-93, game.config.height - 560, 'chick')
        this.chick2 = this.add.image(game.config.width-140, 272, 'chick_3')
        this.chick3 = this.add.image(125,game.config.height - 540, 'chick_2')
        this.chick4 = this.add.image(80,272, 'chick_1')

        this.chick1.alpha = 1
        this.chick2.alpha = 1
        this.chick3.alpha = 1
        this.chick4.alpha = 1

        this.platform1body = this.matter.add.gameObject(this.platform1, {
            isStatic: true,
            shape: shapes.plate_1,
        }).setOrigin(0.5)
        this.platform1.setOrigin(0.5, 0.2)
        this.platform1.alpha = 0
        this.platform2body = this.matter.add.gameObject(this.platform2, {
            isStatic: true,
            shape: shapes.plate_2,
        }).setOrigin(0.5)
        this.platform2.setOrigin(0.47)
        this.platform2.alpha = 0
        this.platform3body = this.matter.add.gameObject(this.platform3, {
            isStatic: true,
            shape: shapes.plate_3,
        }).setOrigin(0.5)
        this.platform3.setOrigin(0.5, 0.2)
        this.platform3.alpha = 0
        this.platform4body = this.matter.add.gameObject(this.platform4, {
            isStatic: true,
            shape: shapes.plate_4,
        }).setOrigin(0.5)
        this.platform4.setOrigin(0.48)
        this.platform4.alpha = 0
        // this.egg = this.add.image(this.platform4.x, this.platform4.y-100, 'egg')

        // this.eggBody = this.matter.add.gameObject(this.egg, {
        //     shape: {type: 'circle', radius: 40},
        // })

        this.topEggs = []
        this.bottomEggs = []
        this.timeIndex = 1800
        this.time.addEvent({
            callback: this.addEgg,
            delay: this.timeIndex,
            loop: true,
            callbackScope: this
        })

        this.wolf = this.add.image(game.config.width/2, game.config.height - 350, 'wolf_1')
        this.wolf.depth = 20
        this.playEggs = this.add.group()
        // this.playEggs.add(this.egg)
        // this.logo = this.add.image(game.config.width/2, 100, 'logo').setOrigin(0.5)
        this.scoreText = this.add.text(game.config.width/2, 170, '0', {fontFamily: 'DigitalNumbers' ,fontSize: '74px', fill: '#000'}).setOrigin(0.5, 0)
    
        document.addEventListener('keydown',(e)=>{
            if((e.keyCode == 8 || e.keyCode == 10009 || e.keyCode == 461 || e.keyCode == 166 || e.keyCode == 196)&&gameState.onGame){
                this.pause()
            }
        })

        this.matter.world.on('collisionstart', (event) => {
            event.pairs.forEach(pair => {
                if(pair.bodyA.gameObject.name === 'handBody' && this.topEggs.some(egg => egg.body === pair.bodyB.gameObject) && (this.wolf.texture.key == 'wolf_1' || this.wolf.texture.key == 'wolf_3')){
                    gameState.score++
                    pair.bodyB.gameObject.destroy()
                    this.catchEgg.play()
                }
                else if(pair.bodyA.gameObject.name === 'handBody' && this.bottomEggs.some(egg => egg.body === pair.bodyB.gameObject)){
                    gameState.score++
                    pair.bodyB.gameObject.destroy()
                    this.catchEgg.play()
                }
            })
        })

    this.hpText = this.add.group({
        key: 'live_0',
        frame: 'live_0',
        frameQuantity: 3,
        gridAlign: { width: 3, height: 1, cellWidth: 135, cellHeight: 90, x: game.config.width - 400, y: 100 }
        })

    this.loadScore()

    this.brokenEggR = this.add.image(game.config.width/2 + 300, game.config.height - 100,'brokenEgg_R');
    this.brokenEggL = this.add.image(game.config.width/2 - 300, game.config.height - 100,'brokenEgg_L');

    this.brokenEggL.alpha = 0
    this.brokenEggR.alpha = 0

    this.versionText = this.add.text(game.config.width - 100, game.config.height - 40, `${game_version}`, { fontFamily:'Rubik-Medium', fontStyle:'bold', fontSize: '30px', fill: '#fff' }).setOrigin(0.5);
}

    pause(){
        gameState.onGame = false
        this.scene.launch('pause')
        this.scene.pause('playgame')
    }

    loadScore(){
        if(localStorage.getItem('heighScore_wolf')){
            this.heigScoreText = this.add.text(180, 145,`${JSON.parse(localStorage.getItem('heighScore_wolf'))}`, {
                fontFamily: 'Nunito',
                fontSize: '44px',
                fontStyle: 'normal',
                color: '#929182',
                align: 'left'
            }).setOrigin(1, 0.5);

            this.heigScoreTitle = this.add.text(this.heigScoreText.x+5, this.heigScoreText.y - 60, "РЕКОРД", {
                fontFamily: 'Nunito',
                fontSize: '44px',
                fontStyle: 'normal',
                color: '#929182',
            }).setOrigin(0.5);
        }
    }

    addEgg(){
        this.egg = this.add.image(this.getRandomX(), this.getRandomY(), 'egg')

        this.eggBody = this.matter.add.gameObject(this.egg, {
            shape: {type: 'circle', radius: 40},
        })
        this.eggBody.name = 'eggBody'

        if(this.egg.y === 350){
            this.topEggs.push({sprite: this.egg, body: this.eggBody})
        }
        else{
            this.bottomEggs.push({sprite: this.egg, body: this.eggBody})
        }
        
        this.playEggs.add(this.egg)
        this.egg.depth = 1
    }

    getRandomX(){
        var rand = Math.random()
        var x = rand < 0.5 ? 150 : game.config.width - 150
        return x
    }

    getRandomY(){
        var rand = Math.random()
        var y = rand < 0.5 ? 350 : game.config.height - 440
        return y
    }

    handMoveLeft(){
        if(gameState.onGame == true){
            this.hand.x = game.config.width/3
            this.handBody.rotation = -0.5
            // this.wolf.x = game.config.width/2-150
            position = 'left'
            if(this.wolf.texture.key === 'wolf_3'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_1')
            }
            if(this.wolf.texture.key === 'wolf_4'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_2')
            }
        }
    }

    checkScore(score){
        switch(score){
            case 10:
                this.timeIndex-=400
                break;
            case 30:
                this.timeIndex-=200
                break;
            case 60:
                this.timeIndex-=200
                break;
            case 120:
                this.timeIndex-=200
                break
            case 240:
                this.timeIndex-=200
                break;
            case 320:
                this.timeIndex = 500
                break;
            default:
                break;
        }
    }

    handMoveRight(){
        if(gameState.onGame == true){
            this.hand.x = game.config.width - 630
            this.handBody.rotation = 0.5
            // this.wolf.x = game.config.width/2+120
            position = 'right'
            if(this.wolf.texture.key === 'wolf_1'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_3')
            }
            if(this.wolf.texture.key === 'wolf_2'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_4')
            }
        }
    }

    handMoveDown(){
        if(gameState.onGame == true){
            this.hand.y = game.config.height/2 + 350
            if(position === 'left'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_2')
            }
            if(position === 'right'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_4')
            }
        }
    }

    handMoveUp(){
        if(gameState.onGame == true){
            this.hand.y = game.config.height/2.3+170
            if(position === 'left'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_1')
                // this.wolf.x = game.config.width/2-150
            }
            if(position === 'right'){
                console.log(this.wolf)
                this.wolf.setTexture('wolf_3')
            }
        }
    }

    update(){
        this.checkScore(gameState.score)
        this.scoreText.text = gameState.score
        let playeble = this.playEggs.getChildren()
        
        for(let i = 0; i < playeble.length; i++){
            if(playeble[i].y > game.config.height - 100){
                if(playeble[i].x > game.config.width/2){
                    let oldXR = this.brokenEggR.x
                    this.brokenEggR.alpha = 1
                    this.brokenEggR.x = playeble[i].x
                    setTimeout(()=>{this.brokenEggR.alpha = 0; this.brokenEggR.x = oldXR}, 400)
                }
                else if(playeble[i].x < game.config.width/2){
                    let oldXL = this.brokenEggL.x
                    this.brokenEggL.alpha = 1
                    this.brokenEggL.x = playeble[i].x
                    setTimeout(()=>{this.brokenEggL.alpha = 0; this.brokenEggL.x = oldXL}, 400)
                }
                playeble[i].destroy()
                gameState.lives-=1
                this.hpText.getChildren()[gameState.lives].setTexture('live_1')
                this.breakeEgg.play()
            }
        }
        
        
        if(gameState.lives == 0){
            this.mainTheme.stop()
            console.log('game over')
            gameState.onGame = false
            gameState.onMenu = true
            this.scene.start('gameOver')
            this.scene.stop('playgame')
        }
    }
}

var playgame = new PlayGame();