N.Player = function(options, game){
  var player = this;
  player.name = options.name;
  var content = function(){
    var response = '<h2>' + player.name + '&rsquo;s turn</h2>';
    return response;
  };

  this.gang = function(l){
    var arr = [];
    for(var i = 0; i < l; ++i){
      arr.push(new N.Ganger(game, player, 'reg'));
    }
    return arr;
  }(4);

  var bindEvents = function(){
    console.log('events');
    $(game).unbind('rendered', bindEvents);
  };

  var startTurn = function(){
    $(game).bind('rendered', bindEvents);
    $(game).trigger('render', content());
  };

  $(this).bind('startTurn', startTurn);
};