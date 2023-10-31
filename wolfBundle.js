"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(i){var a=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(i);return _possibleConstructorReturn(this,a?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var game,parentOrigin,sessionID,Preloader=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"preloader"})}return _createClass(t,[{key:"preload",value:function(){try{var t={action:"startDownloading",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,parentOrigin),this.loadText=this.add.text(game.config.width/2,game.config.height/2,"Loading...",{fontFamily:"DigitalNumbers"}).setAlpha(0),this.loadText1=this.add.text(game.config.width/2,game.config.height/2,"Загрузка...",{fontFamily:"Rubik-Medium",fontSize:64,fontStyle:"bold",color:"#ffffff",align:"center"}).setOrigin(.5),this.loadText2=this.add.text(game.config.width/2,game.config.height/2,"Загрузка...",{fontFamily:"Rubik-Regular",fontSize:64,fontStyle:"bold",color:"#ffffff",align:"center"}).alpha=0,this.loadText3=this.add.text(game.config.width/2,game.config.height/2,"Загрузка...",{fontFamily:"RubikOne-Regular",fontSize:64,fontStyle:"bold",color:"#ffffff",align:"center"}).alpha=0,this.loadText4=this.add.text(game.config.width/2,game.config.height/2,"Загрузка...",{fontFamily:"Rubik-SemiBold",fontSize:64,fontStyle:"bold",color:"#ffffff",align:"center"}).alpha=0,this.loadText4=this.add.text(game.config.width/2,game.config.height/2,"Загрузка...",{fontFamily:"Nunito",fontSize:64,fontStyle:"bold",color:"#ffffff",align:"center"}).alpha=0,this.load.image("line","assets/line.png"),this.load.image("bg","assets/bg.png"),this.load.image("mainBg","assets/1.png"),this.load.image("egg","assets/egg.png"),this.load.image("plate_1","assets/plate_1.png"),this.load.image("plate_2","assets/plate_2.png"),this.load.image("plate_3","assets/plate_3.png"),this.load.image("plate_4","assets/plate_4.png"),this.load.image("startSelected","assets/startSelected.png"),this.load.image("exitSelected","assets/exitSelected.png"),this.load.image("exitEmpty","assets/exitEmpty.png"),this.load.image("startEmpty","assets/startEmpty.png"),this.load.image("resumeSelected","assets/resumeSelected.png"),this.load.image("resumeEmpty","assets/resumeEmpty.png"),this.load.image("pauseBg","assets/pauseBg.png"),this.load.image("gameOverBg","assets/gameOverBg.png"),this.load.image("wolf_1","assets/wolf_1.png"),this.load.image("wolf_2","assets/wolf_2.png"),this.load.image("wolf_3","assets/wolf_3.png"),this.load.image("wolf_4","assets/wolf_4.png"),this.load.image("busket","assets/busket.png"),this.load.image("restartSelected","assets/restartSelected.png"),this.load.image("restartEmpty","assets/restartEmpty.png"),this.load.image("logo","assets/gameLogo.png"),this.load.image("rightSideBushes_0","assets/rightSideBushes_0.png"),this.load.image("rightSideBushes_1","assets/rightSideBushes_1.png"),this.load.image("damnCust","assets/damnCust.png"),this.load.image("damnCust1","assets/damnCust1.png"),this.load.image("damnCust2","assets/damnCust2.png"),this.load.image("damnCust3","assets/damnCust3.png"),this.load.image("live_0","assets/live_0.png"),this.load.image("live_1","assets/live_1.png"),this.load.image("chick","assets/chick.png"),this.load.image("chick2","assets/chick2.png"),this.load.image("chick_1","assets/chick_1.png"),this.load.image("chick_2","assets/chick_2.png"),this.load.image("chick_3","assets/chick_3.png"),this.load.image("contrl_Info_menu","assets/contrl_Info_menu.png"),this.load.image("ageInfo","assets/ageInfo.png"),this.load.image("brokenEgg_L","assets/egg_broken_L.png"),this.load.image("brokenEgg_R","assets/egg_broken_R.png"),this.load.image("leftSideBushes","assets/leftSideBushes.png"),this.load.audio("mainMus","assets/sounds/mainMus.mp3"),this.load.audio("catchEgg","assets/sounds/catchEgg.mp3"),this.load.audio("lose","assets/sounds/lose.mp3"),this.load.audio("breakeEgg","assets/sounds/breakeEgg.mp3"),this.load.json("shapes","assets/tryingPE.json")}catch(e){var i={action:"startDownloadingError",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,parentOrigin)}}},{key:"create",value:function(){try{var t={action:"finishDownload",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,parentOrigin)}catch(e){var i={action:"downloadError",allGameSessionId:sessionID,timeStamp:Date.now()};null!=(t=window)&&t.parent.postMessage(i,parentOrigin)}this.scene.start("mainmenu")}}]),t}(),preloader=new Preloader,_startGame={action:"startGame",allGameSessionId:sessionID,gameSessionId:gameId,timeStamp:Date.now()},MainMenu=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"mainmenu"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.onMenu=!0,this.mainBg=this.add.image(game.config.width/2,game.config.height/2,"mainBg").setOrigin(.5),this.mainBg.setDisplaySize(game.config.width,game.config.height),this.ageInfo=this.add.image(game.config.width-210,70,"ageInfo").setOrigin(0,.5),this.cntrlInfo=this.add.image(260,game.config.height-60,"contrl_Info_menu").setOrigin(.5),this.selector=this.add.image(game.config.width/2,game.config.height/2+56,"selector").setOrigin(.5),this.btnStart=this.add.sprite(game.config.width/2,game.config.height/2+56,"startSelected"),this.btnStart.setOrigin(.5),this.btnClose=this.add.sprite(this.btnStart.x,this.btnStart.y+130,"exitEmpty").setOrigin(.5),this.btnStart.setInteractive(),this.btnClose.setInteractive(),this.btnClose.on("pointerdown",this.exit,this),this.btnStart.on("pointerdown",this.startGame,this),this.versionText=this.add.text(game.config.width-100,game.config.height-40,"".concat(game_version),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5),this.loadScore(),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.onMenu||t.exit()})}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_wolf")&&(this.heigScoreText=this.add.text(game.config.width/2,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_wolf"))),{fontFamily:"Rubik-Medium",fontSize:64,fontStyle:"normal",color:"#313131"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#313131"}).setOrigin(.5))}},{key:"selectorDown",value:function(){1==gameState.onMenu&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,this.btnClose.setTexture("exitSelected"),this.btnStart.setTexture("startEmpty"))}},{key:"selectorUp",value:function(){1==gameState.onMenu&&this.selector.y!=this.btnStart.y&&(this.selector.y=this.btnStart.y,this.btnStart.setTexture("startSelected"),this.btnClose.setTexture("exitEmpty"))}},{key:"gameToggle",value:function(){1==gameState.onMenu&&(this.selector.y==this.btnStart.y?this.startGame():this.selector.y==this.btnClose.y&&this.exit())}},{key:"startGame",value:function(){var e;gameState.onMenu=!1,_startGame.gameSessionId=generateUUID(),_startGame.allGameSessionId=sessionID,null!=(e=window)&&e.parent.postMessage(_startGame,parentOrigin),this.scene.start("playgame")}},{key:"exit",value:function(){var e,t;gameState.onMenu&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(t,parentOrigin),posted=!0)}}]),t}(),mainmenu=new MainMenu,ScenePause=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"pause"})}return _createClass(t,[{key:"create",value:function(){var t=this;gameState.onPause=!0,gameState.onMenu=!1,gameState.onGame=!1;try{var i={action:"gamePause",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(a=window)&&a.parent.postMessage(i,parentOrigin),this.pauseBg=this.add.image(game.config.width/2,game.config.height/2,"pauseBg"),this.pauseBg.setOrigin(.5),this.pauseBg.setDisplaySize(game.config.width,game.config.height),this.selector=this.add.image(game.config.width/2,game.config.height/2+56,"selector").setOrigin(.5),this.btnStart=this.add.sprite(game.config.width/2,game.config.height/2+56,"resumeSelected"),this.btnStart.setOrigin(.5),this.cntrlInfo=this.add.image(260,game.config.height-60,"contrl_Info_menu").setOrigin(.5),this.btnClose=this.add.sprite(this.btnStart.x,this.btnStart.y+130,"exitEmpty"),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||t.exit()}),this.btnStart.setInteractive(),this.btnClose.setInteractive(),this.btnClose.on("pointerdown",this.exit,this),this.btnStart.on("pointerdown",this.resumeGame,this),this.input.keyboard.on("keydown-ENTER",this.gameToggle,this),this.loadScore(),this.score=this.add.text(game.config.width/2-150,game.config.height-100,"".concat(gameState.score),{fontFamily:"Rubik-Regular",fontStyle:"bold",fontSize:"64px",fill:"#313131"}).setOrigin(.5),this.scoreTitle=this.add.text(this.score.x,this.score.y-75,"Счёт",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#313131"}).setOrigin(.5),this.versionText=this.add.text(game.config.width-100,game.config.height-40,"".concat(game_version),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}catch(e){var a={action:"gamePauseError",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(a,parentOrigin)}}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_wolf")&&(this.heigScoreText=this.add.text(game.config.width/2+150,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_wolf"))),{fontFamily:"Rubik-Regular",fontSize:64,fontStyle:"bold",color:"#313131",align:"center"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#313131"}).setOrigin(.5),this.line=this.add.image(game.config.width/2,game.config.height-120,"line").setOrigin(.5))}},{key:"selectorDown",value:function(){1==gameState.onPause&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,this.btnClose.setTexture("exitSelected"),this.btnStart.setTexture("resumeEmpty"))}},{key:"selectorUp",value:function(){1==gameState.onPause&&this.selector.y!=this.btnStart.y&&(this.selector.y=this.btnStart.y,this.btnStart.setTexture("resumeSelected"),this.btnClose.setTexture("exitEmpty"))}},{key:"gameToggle",value:function(){1==gameState.onPause&&(this.selector.y==this.btnStart.y?this.resumeGame():this.selector.y==this.btnClose.y&&this.exit())}},{key:"resumeGame",value:function(){if(1==gameState.onPause){gameState.onPause=!1,gameState.onGame=!0;try{var t={action:"gameResume",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(i=window)&&i.parent.postMessage(t,parentOrigin)}catch(e){var i={action:"gameResumeError",allGameSessionId:_startGame.allGameSessionId,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(t=indow)&&t.parent.postMessage(i,parentOrigin)}this.scene.resume(playgame),this.scene.stop(scenepause)}}},{key:"exit",value:function(){var e,t,i;gameState.onPause&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},i={action:"gameOver",allGameSessionId:sessionID,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(i,parentOrigin),null!=(e=window)&&e.parent.postMessage(t,parentOrigin),posted=!0)}}]),t}(),scenepause=new ScenePause,GameOver=function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"gameOver"})}return _createClass(t,[{key:"create",value:function(){var e,t=this,i={action:"gameOver",allGameSessionId:sessionID,gameSessionId:_startGame.gameSessionId,score:gameState.score,timeStamp:Date.now()};null!=(e=window)&&e.parent.postMessage(i,parentOrigin),gameState.isOver=!0,gameState.onMenu=!1,gameState.onGame=!1,this.gameOverBg=this.add.image(game.config.width/2,game.config.height/2,"gameOverBg").setOrigin(.5),this.gameOverBg.setDisplaySize(game.config.width,game.config.height),this.loseSound=this.sound.add("lose",{loop:!1,volume:.3}),this.loseSound.play(),this.selector=this.add.sprite(game.config.width/2,game.config.height/2+56,"selector"),this.selector.setOrigin(.5),this.btnRestart=this.add.sprite(game.config.width/2,game.config.height/2+56,"restartSelected"),this.btnRestart.setOrigin(.5),this.btnClose=this.add.sprite(this.btnRestart.x,this.btnRestart.y+130,"exitEmpty"),this.btnClose.setOrigin(.5),this.cntrlInfo=this.add.image(260,game.config.height-60,"contrl_Info_menu").setOrigin(.5),this.btnRestart.setInteractive(),this.btnClose.setInteractive(),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.isOver||t.exit()}),this.btnRestart.on("pointerdown",this.startGame,this),this.btnClose.on("pointerdown",this.exit,this),this.input.keyboard.on("keydown-ENTER",this.gameToggle,this),this.saveScore(),this.loadScore(),this.score=this.add.text(game.config.width/2-150,game.config.height-100,"".concat(gameState.score),{fontFamily:"Rubik-Regular",fontStyle:"bold",fontSize:"64px",fill:"#313131"}).setOrigin(.5),this.scoreTitle=this.add.text(this.score.x,this.score.y-75,"Счёт",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#313131"}).setOrigin(.5),this.versionText=this.add.text(game.config.width-100,game.config.height-40,"".concat(game_version),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"saveScore",value:function(){this.heighScore=gameState.score,this.oldScore=JSON.parse(localStorage.getItem("heighScore_wolf")),this.heighScore>this.oldScore?localStorage.setItem("heighScore_wolf",JSON.stringify(this.heighScore)):this.heighScore=this.oldScore}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_wolf")&&(this.heigScoreText=this.add.text(game.config.width/2+150,game.config.height-100,"".concat(JSON.parse(localStorage.getItem("heighScore_wolf"))),{fontFamily:"Rubik-Regular",fontSize:64,fontStyle:"bold",color:"#313131",align:"center"}).setOrigin(.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x,this.heigScoreText.y-75,"Рекорд",{fontFamily:"Rubik-Regular",fontSize:48,fontStyle:"normal",color:"#313131"}).setOrigin(.5),this.line=this.add.image(game.config.width/2,game.config.height-120,"line").setOrigin(.5))}},{key:"selectorDown",value:function(){1==gameState.isOver&&this.selector.y!=this.btnClose.y&&(this.selector.y=this.btnClose.y,this.btnClose.setTexture("exitSelected"),this.btnRestart.setTexture("restartEmpty"))}},{key:"selectorUp",value:function(){1==gameState.isOver&&this.selector.y!=this.btnRestart.y&&(this.selector.y=this.btnRestart.y,this.btnRestart.setTexture("restartSelected"),this.btnClose.setTexture("exitEmpty"))}},{key:"gameToggle",value:function(){1==gameState.isOver&&(this.selector.y==this.btnRestart.y?this.startGame():this.selector.y==this.btnClose.y&&this.exit())}},{key:"startGame",value:function(){var e;gameState.isOver=!1,gameState.score=0,gameState.lives=3,_startGame.gameSessionId=generateUUID(),_startGame.allGameSessionId=sessionID,null!=(e=window)&&e.parent.postMessage(_startGame,parentOrigin),this.scene.start(playgame),this.scene.stop()}},{key:"exit",value:function(){var e,t;gameState.isOver&&!posted&&(t={action:"closeGameSession",allGameSessionId:sessionID,timeStamp:Date.now()},null!=(e=window)&&e.parent.postMessage(t,parentOrigin),posted=!0)}}]),t}(),gameOver=new GameOver,gameState={onMenu:!1,onPause:!1,isOver:!1,onGame:!1,score:0,lives:3},gameId=generateUUID(),posted=!1,position="left",game_version="v 0.2.7s",physicsConfig={default:"matter",matter:{debug:!1}},PlayGame=(window.onload=function(){var e,t={type:Phaser.CANVAS,width:1920,height:1080,backgroundColor:"#bfcc00",parent:"phaser-example",scene:[preloader,mainmenu,playgame,scenepause,gameOver],physics:physicsConfig,scale:{mode:Phaser.Scale.FIT},audio:{disableWebAudio:!0}},i=(document.referrer?(parentOrigin=document.referrer,console.log(parentOrigin)):parentOrigin="*",{action:"startGameSession",allGameSessionId:sessionID=generateUUID(),timeStamp:Date.now()});null!=(e=window)&&e.parent.postMessage(i,parentOrigin),game=new Phaser.Game(t)},function(){_inherits(t,Phaser.Scene);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.call(this,{key:"playgame"})}return _createClass(t,[{key:"create",value:function(){var i=this,e=(this.mainTheme=this.sound.add("mainMus",{loop:!0,volume:.3}),this.breakeEgg=this.sound.add("breakeEgg",{loop:!1,volume:.3}),this.catchEgg=this.sound.add("catchEgg",{loop:!1,volume:.3}),this.bg=this.add.image(game.config.width/2,game.config.height/2,"bg").setOrigin(.5),gameState.onGame=!0,gameState.onMenu=!1,this.mainTheme.play(),this.cache.json.get("shapes"));this.hand=this.add.sprite(game.config.width/3,game.config.height/2.3+170,"busket",null,{isStatic:!0}),this.handBody=this.matter.add.gameObject(this.hand,{isStatic:!0,shape:{type:"polygon",sides:12,radius:50}}),this.handBody.rotation=-.5,this.hand.depth=15,this.handBody.name="handBody",this.hand.alpha=0,this.platform1=this.add.image(280,440,"plate_1"),this.custick=this.add.image(170,660,"damnCust").setOrigin(.5),this.damnCumCust=this.add.image(270,830,"damnCust1"),this.platform2=this.add.image(250,game.config.height-345,"plate_2"),this.platform3=this.add.image(game.config.width-280,450,"plate_3"),this.damnCust3=this.add.image(game.config.width-240,780,"damnCust3"),this.platform4=this.add.image(game.config.width-253,game.config.height-345,"plate_4"),this.leftSideBushes=this.add.image(270,game.config.height-200,"leftSideBushes"),this.rightSideBushes_0=this.add.image(game.config.width-290,game.config.height-190,"rightSideBushes_0"),this.rightSideBushes_1=this.add.image(game.config.width-210,game.config.height-150,"rightSideBushes_1"),this.custick.alpha=0,this.damnCumCust.alpha=0,this.damnCust3.alpha=0,this.leftSideBushes.alpha=0,this.rightSideBushes_0.alpha=0,this.rightSideBushes_1.alpha=0,this.chick1=this.add.image(game.config.width-93,game.config.height-560,"chick"),this.chick2=this.add.image(game.config.width-140,272,"chick_3"),this.chick3=this.add.image(125,game.config.height-540,"chick_2"),this.chick4=this.add.image(80,272,"chick_1"),this.chick1.alpha=1,this.chick2.alpha=1,this.chick3.alpha=1,this.chick4.alpha=1,this.platform1body=this.matter.add.gameObject(this.platform1,{isStatic:!0,shape:e.plate_1}).setOrigin(.5),this.platform1.setOrigin(.5,.2),this.platform1.alpha=0,this.platform2body=this.matter.add.gameObject(this.platform2,{isStatic:!0,shape:e.plate_2}).setOrigin(.5),this.platform2.setOrigin(.47),this.platform2.alpha=0,this.platform3body=this.matter.add.gameObject(this.platform3,{isStatic:!0,shape:e.plate_3}).setOrigin(.5),this.platform3.setOrigin(.5,.2),this.platform3.alpha=0,this.platform4body=this.matter.add.gameObject(this.platform4,{isStatic:!0,shape:e.plate_4}).setOrigin(.5),this.platform4.setOrigin(.48),this.platform4.alpha=0,this.topEggs=[],this.bottomEggs=[],this.timeIndex=1800,this.time.addEvent({callback:this.addEgg,delay:this.timeIndex,loop:!0,callbackScope:this}),this.wolf=this.add.image(game.config.width/2,game.config.height-350,"wolf_1"),this.wolf.depth=20,this.playEggs=this.add.group(),this.scoreText=this.add.text(game.config.width/2,170,"0",{fontFamily:"DigitalNumbers",fontSize:"74px",fill:"#000"}).setOrigin(.5,0),document.addEventListener("keydown",function(e){8!=e.keyCode&&10009!=e.keyCode&&461!=e.keyCode&&166!=e.keyCode&&196!=e.keyCode||!gameState.onGame||i.pause()}),this.matter.world.on("collisionstart",function(e){e.pairs.forEach(function(t){("handBody"===t.bodyA.gameObject.name&&i.topEggs.some(function(e){return e.body===t.bodyB.gameObject})&&("wolf_1"==i.wolf.texture.key||"wolf_3"==i.wolf.texture.key)||"handBody"===t.bodyA.gameObject.name&&i.bottomEggs.some(function(e){return e.body===t.bodyB.gameObject}))&&(gameState.score++,t.bodyB.gameObject.destroy(),i.catchEgg.play())})}),this.hpText=this.add.group({key:"live_0",frame:"live_0",frameQuantity:3,gridAlign:{width:3,height:1,cellWidth:135,cellHeight:90,x:game.config.width-400,y:100}}),this.loadScore(),this.brokenEggR=this.add.image(game.config.width/2+300,game.config.height-100,"brokenEgg_R"),this.brokenEggL=this.add.image(game.config.width/2-300,game.config.height-100,"brokenEgg_L"),this.brokenEggL.alpha=0,this.brokenEggR.alpha=0,this.versionText=this.add.text(game.config.width-100,game.config.height-40,"".concat(game_version),{fontFamily:"Rubik-Medium",fontStyle:"bold",fontSize:"30px",fill:"#fff"}).setOrigin(.5)}},{key:"pause",value:function(){gameState.onGame=!1,this.scene.launch("pause"),this.scene.pause("playgame")}},{key:"loadScore",value:function(){localStorage.getItem("heighScore_wolf")&&(this.heigScoreText=this.add.text(180,145,"".concat(JSON.parse(localStorage.getItem("heighScore_wolf"))),{fontFamily:"Nunito",fontSize:"44px",fontStyle:"normal",color:"#929182",align:"left"}).setOrigin(1,.5),this.heigScoreTitle=this.add.text(this.heigScoreText.x+5,this.heigScoreText.y-60,"РЕКОРД",{fontFamily:"Nunito",fontSize:"44px",fontStyle:"normal",color:"#929182"}).setOrigin(.5))}},{key:"addEgg",value:function(){this.egg=this.add.image(this.getRandomX(),this.getRandomY(),"egg"),this.eggBody=this.matter.add.gameObject(this.egg,{shape:{type:"circle",radius:40}}),this.eggBody.name="eggBody",(350===this.egg.y?this.topEggs:this.bottomEggs).push({sprite:this.egg,body:this.eggBody}),this.playEggs.add(this.egg),this.egg.depth=1}},{key:"getRandomX",value:function(){return Math.random()<.5?150:game.config.width-150}},{key:"getRandomY",value:function(){return Math.random()<.5?350:game.config.height-440}},{key:"handMoveLeft",value:function(){1==gameState.onGame&&(this.hand.x=game.config.width/3,this.handBody.rotation=-.5,position="left","wolf_3"===this.wolf.texture.key&&this.wolf.setTexture("wolf_1"),"wolf_4"===this.wolf.texture.key)&&this.wolf.setTexture("wolf_2")}},{key:"checkScore",value:function(e){switch(e){case 10:this.timeIndex-=400;break;case 30:case 60:case 120:case 240:this.timeIndex-=200;break;case 320:this.timeIndex=500}}},{key:"handMoveRight",value:function(){1==gameState.onGame&&(this.hand.x=game.config.width-630,this.handBody.rotation=.5,position="right","wolf_1"===this.wolf.texture.key&&this.wolf.setTexture("wolf_3"),"wolf_2"===this.wolf.texture.key)&&this.wolf.setTexture("wolf_4")}},{key:"handMoveDown",value:function(){1==gameState.onGame&&(this.hand.y=game.config.height/2+350,"left"===position&&this.wolf.setTexture("wolf_2"),"right"===position)&&this.wolf.setTexture("wolf_4")}},{key:"handMoveUp",value:function(){1==gameState.onGame&&(this.hand.y=game.config.height/2.3+170,"left"===position&&this.wolf.setTexture("wolf_1"),"right"===position)&&this.wolf.setTexture("wolf_3")}},{key:"update",value:function(){for(var i=this,a=(this.checkScore(gameState.score),this.scoreText.text=gameState.score,this.playEggs.getChildren()),s=0;s<a.length;s++)!function(){var e,t;a[s].y>game.config.height-100&&(a[s].x>game.config.width/2?(e=i.brokenEggR.x,i.brokenEggR.alpha=1,i.brokenEggR.x=a[s].x,setTimeout(function(){i.brokenEggR.alpha=0,i.brokenEggR.x=e},400)):a[s].x<game.config.width/2&&(t=i.brokenEggL.x,i.brokenEggL.alpha=1,i.brokenEggL.x=a[s].x,setTimeout(function(){i.brokenEggL.alpha=0,i.brokenEggL.x=t},400)),a[s].destroy(),--gameState.lives,i.hpText.getChildren()[gameState.lives].setTexture("live_1"),i.breakeEgg.play())}();0==gameState.lives&&(this.mainTheme.stop(),gameState.onGame=!1,gameState.onMenu=!0,this.scene.start("gameOver"),this.scene.stop("playgame"))}}]),t}()),playgame=new PlayGame;