N.StartScreen = function(game){
  var rendered = '';
  var contents = function(){
    var response = '<h2>New Game</h2>';
    response += '<section>';
    response += '<input class="player1" value="player 1">';
    response += '<input class="player1-ganger" value="ganger">';
    response += '<input class="player1-ganger" value="ganger">';
    response += '<input class="player1-ganger" value="ganger">';
    response += '<input class="player1-ganger" value="ganger">';
    response += '</section>';
    response += '<section>';
    response += '<input class="player2" value="player 2">';
    response += '<input class="player2-ganger" value="ganger">';
    response += '<input class="player2-ganger" value="ganger">';
    response += '<input class="player2-ganger" value="ganger">';
    response += '<input class="player2-ganger" value="ganger">';
    response += '</section>';
    response += '<button class="start">Start</button>';
    return response;
  };

  rendered = function(){
    $('.start').click(function(){
      $(game).trigger('newPlayer', { 
        name: $('.player1').val(),
        gang_names: N.utils.fetchInputs('.player1-ganger')
      });
      $(game).trigger('newPlayer', { 
        name: $('.player2').val(),
        gang_names: N.utils.fetchInputs('.player2-ganger')
      });
      $(game).trigger('startGame');
    });
  };
  $(game).bind('rendered', rendered);
  
  $(game).trigger('render', contents());
};