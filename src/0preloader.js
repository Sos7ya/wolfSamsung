class Preloader extends Phaser.Scene{
    constructor(){
        super({key: 'preloader'})
    }

    preload(){
        try{
            let startDownloading = {
                action: 'startDownloading',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(startDownloading, parentOrigin);

        this.loadText = this.add.text(game.config.width/2, game.config.height/2, 'Loading...',{fontFamily: 'DigitalNumbers'}).setAlpha(0)

        this.loadText1 = this.add.text(game.config.width / 2, game.config.height / 2, "Загрузка...", {
            fontFamily: 'Rubik-Medium',
            fontSize: 64,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5)

        this.loadText2 = this.add.text(game.config.width / 2, game.config.height / 2, "Загрузка...", {
            fontFamily: 'Rubik-Regular',
            fontSize: 64,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        }).alpha = 0

        this.loadText3 = this.add.text(game.config.width / 2, game.config.height / 2, "Загрузка...", {
            fontFamily: 'RubikOne-Regular',
            fontSize: 64,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        }).alpha = 0

        this.loadText4 = this.add.text(game.config.width / 2, game.config.height / 2, "Загрузка...", {
            fontFamily: 'Rubik-SemiBold',
            fontSize: 64,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        }).alpha = 0

        this.loadText4 = this.add.text(game.config.width / 2, game.config.height / 2, "Загрузка...", {
            fontFamily: 'Nunito',
            fontSize: 64,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        }).alpha = 0

        this.load.image('line', 'assets/line.png');
        this.load.image('bg', 'assets/bg.png');
        this.load.image('mainBg', 'assets/1.png');
        this.load.image('egg', 'assets/egg.png');
        this.load.image('plate_1', 'assets/plate_1.png');
        this.load.image('plate_2', 'assets/plate_2.png');
        this.load.image('plate_3', 'assets/plate_3.png');
        this.load.image('plate_4', 'assets/plate_4.png');
        this.load.image('startSelected', 'assets/startSelected.png');
        this.load.image('exitSelected', 'assets/exitSelected.png');
        this.load.image('exitEmpty', 'assets/exitEmpty.png');
        this.load.image('startEmpty', 'assets/startEmpty.png');
        this.load.image('resumeSelected', 'assets/resumeSelected.png');
        this.load.image('resumeEmpty', 'assets/resumeEmpty.png');
        this.load.image('pauseBg', 'assets/pauseBg.png');
        this.load.image('gameOverBg', 'assets/gameOverBg.png');
        this.load.image('wolf_1', 'assets/wolf_1.png');
        this.load.image('wolf_2', 'assets/wolf_2.png');
        this.load.image('wolf_3', 'assets/wolf_3.png');
        this.load.image('wolf_4', 'assets/wolf_4.png');
        this.load.image('busket', 'assets/busket.png');
        this.load.image('restartSelected', 'assets/restartSelected.png');
        this.load.image('restartEmpty', 'assets/restartEmpty.png');
        this.load.image('logo', 'assets/gameLogo.png');
        this.load.image('rightSideBushes_0', 'assets/rightSideBushes_0.png');
        this.load.image('rightSideBushes_1', 'assets/rightSideBushes_1.png');
        this.load.image('damnCust', 'assets/damnCust.png');

        this.load.image('damnCust1', 'assets/damnCust1.png');
        this.load.image('damnCust2', 'assets/damnCust2.png');
        this.load.image('damnCust3', 'assets/damnCust3.png');
        this.load.image('live_0', 'assets/live_0.png');
        this.load.image('live_1', 'assets/live_1.png');

        this.load.image('chick', 'assets/chick.png');
        this.load.image('chick2', 'assets/chick2.png');
        this.load.image('chick_1', 'assets/chick_1.png');
        this.load.image('chick_2', 'assets/chick_2.png');
        this.load.image('chick_3', 'assets/chick_3.png');

        this.load.image('contrl_Info_menu', 'assets/contrl_Info_menu.png');
        this.load.image('ageInfo', 'assets/ageInfo.png');

        this.load.image('brokenEgg_L', 'assets/egg_broken_L.png');
        this.load.image('brokenEgg_R', 'assets/egg_broken_R.png');

        this.load.image('leftSideBushes', 'assets/leftSideBushes.png');

        this.load.audio('mainMus', 'assets/sounds/mainMus.mp3');
        this.load.audio('catchEgg', 'assets/sounds/catchEgg.mp3');
        this.load.audio('lose', 'assets/sounds/lose.mp3');
        this.load.audio('breakeEgg', 'assets/sounds/breakeEgg.mp3');

        this.load.json('shapes', 'assets/tryingPE.json');
    }
    catch(er){
        let startDownloadingError = {
            action: 'startDownloadingError',
            allGameSessionId: sessionID,
            timeStamp: Date.now()
        }
        window?.parent.postMessage(startDownloadingError, parentOrigin);
    }
    }

    create(){
        try{
            let finishDownload = {
                action: 'finishDownload',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(finishDownload, parentOrigin)
        }
        catch(er){
            let downloadError = {
                action: 'downloadError',
                allGameSessionId: sessionID,
                timeStamp: Date.now()
            }
            window?.parent.postMessage(downloadError, parentOrigin)
        }
        this.scene.start('mainmenu')
    }
}

var preloader = new Preloader()