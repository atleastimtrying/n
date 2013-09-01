N.Game = function(){
  this.players = [];
  
  var render = function(event,content){
    $('#table').html(content);
    $(this).trigger('rendered');
  };
  
  var newPlayer = function(event,data){
    this.players.push(new N.Player(data, this));
  };

  var startGame = function(){
    delete this.startScreen;
    $(this.players[0]).trigger('startTurn');
  };

  $(this).bind('render', render);
  $(this).bind('newPlayer', newPlayer);
  $(this).bind('startGame', startGame);
  this.startScreen = new N.StartScreen(this);
};