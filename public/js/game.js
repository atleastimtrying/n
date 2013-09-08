N.Game = function(){
  var game = this;
  game.players = [];
  game.scale = 20;
  game.currentGanger = '';
  
  var render = function(event,content){
    $('#table').html(content);
    $(game).trigger('rendered');
  };

  var setCurrentGanger = function(event, ganger){
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
    $(game).trigger('render', renderStart());
    $(game.players[0]).trigger('startTurn');
    $(game.players[1]).trigger('endTurn');
  };

  var renderStart = function(){
    var html = '';
    $(game.players).each(function(index, player){
      $(player.gang).each(function(index, ganger){
        html += ganger.render();
      });
    });
    return html;
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