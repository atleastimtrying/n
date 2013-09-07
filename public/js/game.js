N.Game = function(){
  var game = this;
  game.players = [];
  
  var render = function(event,content){
    $('#table').html(content);
    $(game).trigger('rendered');
  };
  
  var newPlayer = function(event,data){
    game.players.push(new N.Player(data, game));
  };

  var startGame = function(){
    delete game.startScreen;
    $(game).trigger('render', renderStart());
    $(game).trigger('setElements', function(){
      $(game.players[0]).trigger('startTurn');
    });
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

  $(game).bind('render', render);
  $(game).bind('newPlayer', newPlayer);
  $(game).bind('startGame', startGame);
  game.startScreen = new N.StartScreen(game);
};