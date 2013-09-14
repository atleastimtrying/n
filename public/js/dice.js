N.Dice = function(game){
  var dice = this;
  dice.d6 = function(){
    var result = N.utils.randup(6);
    $(game).trigger('d6Rolled', result);
    return result;
  };
  
  dice.d3 = function(){
    var result = N.utils.randup(3);
    $(game).trigger('d3Rolled', result);
    return result; 
  };
  
  $('#d6').click(function(){
    $(this).html(N.dice.d6());
  });
  
  $('#d3').click(function(){
    $(this).html(N.dice.d3());
  });
};