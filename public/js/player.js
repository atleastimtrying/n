N.Player = function(options, game){
  var player = this;
  player.name = options.name;
  player.colour = 'hsla(' + N.utils.roundom(360) + ', 70%, 80%, 1)';
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
      var ganger = new N.Ganger(game, player, names[i]));
      arr.push(ganger);
      game.gangers.push(ganger);
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
    movement();
  };

  var endTurn = function(event){
    $(player.gang).each(function(index, ganger){
      ganger.disable();
    });
  };

  var endMovement = function(){
    $(game).trigger('overlays.hide','movement');
    $(game).off('endPhase', endMovement);
    $(player.gang).each(function(index, ganger){
      ganger.endMovement();
    });
    shooting();
  };

  var movement = function(){
    phase = 'movement';
    $(game).trigger('overlays.show','movement');
    $(player.gang).each(function(index, ganger){
      ganger.movement();
    });
    $(game).on('endPhase', endMovement);
  };

  var shooting = function(){
    $(game).trigger('overlays.show','range');
    phase = 'shooting';
    $(player.gang).each(function(index, ganger){
      ganger.shooting();
    });
    $(game).on('endPhase', endShooting);
  }

  var endShooting = function(){
    $(game).trigger('overlays.hide','range');
    $(game).off('endPhase', endShooting);
    $(player.gang).each(function(index, ganger){
      ganger.endShooting();
    });
    console.log('end of shooting');
  };
  $(this).on('startTurn', startTurn);
  $(this).on('endTurn', endTurn);
};