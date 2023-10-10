//console.log = function(message) {
  //document.getElementById('divlog').innerHTML += message + ' ';
//};
//console.warn = console.log;
window.addEventListener('load', function() {

    SpatialNavigation.init();
    SpatialNavigation.add({
      selector: '.focusable'
    });

    if (typeof AndroidBridge !== 'undefined') {
      initializeAndroidTVInput();
  }
   
    // All valid events.
    var validEvents = [
        'sn:willmove',
        'sn:enter-down',
        'sn:enter-up',
      ];

      var eventHandler = function(evt) {
        if(evt.type == 'sn:enter-down'){
          mainmenu.gameToggle()
          gameOver.gameToggle()
          scenepause.gameToggle()
        }
        //document.getElementById('divlog').innerHTML += evt.detail.direction + '\n';
        switch(evt.detail.direction){
          case 'up':
            mainmenu.selectorUp()
            scenepause.selectorUp()
            // scenePause.selectorUp()
            gameOver.selectorUp()
            playgame.handMoveUp()
            break;
          case 'down':
            mainmenu.selectorDown()
            scenepause.selectorDown()
            gameOver.selectorDown()
            // scenePause.selectorDown()
            playgame.handMoveDown()
            break;
            case 'left':
              playgame.handMoveLeft();
            break;
            case 'right':
              playgame.handMoveRight()
            break;
        }
       
      };

      validEvents.forEach(function(type) {
        window.addEventListener(type, eventHandler);
      });
    
    SpatialNavigation.makeFocusable();
    SpatialNavigation.focus();
  });

  function initializeAndroidTVInput(){
AndroidBridge.onKeyEvent(function(event) {

  if (event.isTVKeyEvent) {
      var keyCode = event.keyCode;
      switch (keyCode) {
          case AndroidBridge.KEYCODE_DPAD_CENTER:
            main.gameToggle()
            gameOver.gameToggle()
            scenePause.gameToggle()
          break;
          case AndroidBridge.KEYCODE_DPAD_UP:
            scenePause.selectorUp()
            gameOver.selector()
            main.selectorUp()
            snake.faceUp()
              break;
          case AndroidBridge.KEYCODE_DPAD_DOWN:
            scenePause.selectorUp()
            gameOver.selectorDown()
            main.selectorDown()
            snake.faceDown()
              break;
          case AndroidBridge.KEYCODE_DPAD_LEFT:
            snake.faceLeft();
              break;
          case AndroidBridge.KEYCODE_DPAD_RIGHT:
            snake.faceRight();
              break;
          default:
              break;
      }
  }
});
  }