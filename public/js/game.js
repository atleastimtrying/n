N.Game = function(){
  var game = this;
  game.players = [];
  game.scale = 30;
  game.currentGanger = '';
  game.dice = new N.Dice(game);
  game.input = new N.Input(game);
  game.gangerDisplay = new N.GangerDisplay(game);
  var render = function(event,content){
    $('#table').html(content);
    $(game).trigger('rendered');
  };

  var setCurrentGanger = function(event, ganger){
    $(game).trigger('ganger.deselect', ganger.id);
    game.currentGanger = ganger;
  };
  
  var headRender = function(event, content){
    $('#header').html(content);
  };

  var footRender = function(event, content){
    $('footer').html(content);
  }

  var newPlayer = function(event,data){
    game.players.push(new N.Player(data, game));
  };

  var startGame = function(){
    delete game.startScreen;
    game.stage = new Kinetic.Stage({
        container: 'table',
        width: 900,
        height: 500
    });
    game.layer = new Kinetic.Layer();
    game.stage.add(game.layer);
    game.imageObj = new Image();
    $(game.imageObj).on('load', renderStart);
    game.imageObj.src = '../img/catachan.png';
    game.layer.draw();
  };

  var renderStart = function(){
    $(game).trigger('ganger.setElement'); 
    $(game.players[0]).trigger('startTurn');
    $(game.players[1]).trigger('endTurn');
  }
  //rendering
  $(game).bind('render', render);
  $(game).bind('headRender', headRender);
  $(game).bind('footRender', footRender);

  //selecting
  $(game).bind('currentGanger', setCurrentGanger);
  
  //start game
  $(game).bind('newPlayer', newPlayer);
  $(game).bind('startGame', startGame);
  game.startScreen = new N.StartScreen(game);
};