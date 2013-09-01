N.StartScreen = function(game){
  var rendered = '';
  var contents = function(){
    var response = '<h2>New Game</h2>';
    response += '<input class="player1" value="player 1">';
    response += '<input class="player2" value="player 2">';
    response += '<button class="start">Start</button>';
    return response;
  };

  rendered = function(){
    $('.start').click(function(){
      $(game).trigger('newPlayer', { name: $('.player1').val()});
      $(game).trigger('newPlayer', { name: $('.player2').val()});
      $(game).trigger('startGame');
    });
  };
  $(game).bind('rendered', rendered);
  
  $(game).trigger('render', contents());
};