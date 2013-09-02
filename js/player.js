N.Player = function(options, game){
  var player = this;
  player.name = options.name;
  var content = function(){
    var response = '<h2>' + player.name + '&rsquo;s turn</h2>';
    $(player.gang).each(function(index, ganger){
      response += ganger.render();
    });
    return response;
  };

  this.gang = function(l){
    var arr = [];
    for(var i = 0; i < l; ++i){
      arr.push(new N.Ganger(game, player, 'reg'));
    }
    return arr;
  }(4);

  var findGanger = function(id){
    var response = false;
    $(player.gang).each(function(index, ganger){
      if(ganger.id === id){
        response = ganger;
      }
    });
    return response;
  };

  var bindEvents = function(){
    $('.ganger').each(function(){
      var el = $(this);
      console.log(el);
      console.log(el.attr('id'));
      console.log(parseInt(el.attr('id')));
      console.log(findGanger(parseInt(el.attr('id'))));
      findGanger(parseInt(el.attr('id'))).setElement(el);
    });
    $(game).unbind('rendered', bindEvents);
  };

  var startTurn = function(){
    $(game).bind('rendered', bindEvents);
    $(game).trigger('render', content());
  };

  $(this).bind('startTurn', startTurn);
};