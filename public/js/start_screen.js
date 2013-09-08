N.StartScreen = function(game){
  var rendered = '';
  var contents = function(){
    return $('#start_screen').html();
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