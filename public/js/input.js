N.Input = function(game){
  var keyup = function(event){
    if(event.keyCode === 37){
      $(game).trigger('input.left');
    }
    if(event.keyCode === 39){
      $(game).trigger('input.right');
    }
  };
  
  var endPhase = function(event){
    $(game).trigger('endPhase');
  };

  $(window).on('keyup', keyup);
  $('#end-phase').on('click', endPhase);
};