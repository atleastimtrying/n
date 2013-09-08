N.Ganger = function(game, player, name){
  var ganger = {
    id: N.utils.assignId(),
    player: player,
    name: name,
    stats: {
      m: 4,
      ws: 3,
      bs: 3,
      ws: 3,
      s: 3,
      t: 3,
      w: 1,
      i: 3,
      a: 1,
      ld: 7
    },
    weapons: [
      N.weapons.knife,
      N.weapons.lasgun
    ],
    location: {
      x: N.utils.roundom(850) + 25,
      y: N.utils.roundom(425) + 50,
      z: 0,
    },
    render: function(){
      return Mustache.to_html($('#ganger').html(), ganger);
    },
    setElement: function(el){
      ganger.el = el;
    },
    select: function(){
      $('.ganger').removeClass('active');
      ganger.el.addClass('active');
      game.trigger('currentGanger', ganger);
    },
    deselect: function(){
      ganger.el.removeClass('active');
    },
    movement: function(){
      ganger.el.removeClass('inactive');
      ganger.el.on('click', ganger.select);
    },
    disable: function(){
      ganger.el.off('click', ganger.select);
      ganger.el.addClass('inactive');
    }
  };
  return ganger;
};