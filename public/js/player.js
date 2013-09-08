N.Player = function(options, game){
  var player = this;
  player.name = options.name;
  player.colour = 'hsla(' + N.utils.roundom(360) + ', 40%, 50%, 1)';
  var gang_names = options.gang_names;
  var phase = 'movement';
  var title = function(){
    var response = '<h2>' + player.name + '&rsquo;s turn: ' + phase + ' phase</h2>';
    return response;
  };

  this.gang = function(names){
    var arr = [];
    var l = names.length;
    for(var i = 0; i < l; ++i){
      arr.push(new N.Ganger(game, player, names[i]));
    }
    return arr;
  }(gang_names);

  var findGanger = function(id){
    var response = false;
    $(player.gang).each(function(index, ganger){
      if(ganger.id === id){
        response = ganger;
      }
    });
    return response;
  };

  var startTurn = function(event){
    $(game).trigger('headRender', title());
    setElements();
    $(player.gang).each(function(index, ganger){
      ganger.movement();
    });
  };

  var endTurn = function(event){
    setElements();
    $(player.gang).each(function(index, ganger){
      ganger.disable();
    });
  };

  var movement = function(){

  };

  var setElements = function(){
    $(player.gang).each(function(index, ganger){
      var el = $('#ID'+ ganger.id );
      ganger.setElement(el);
    });
  }
  $(this).bind('startTurn', startTurn);
  $(this).bind('endTurn', endTurn);
};