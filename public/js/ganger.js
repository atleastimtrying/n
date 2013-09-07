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
      return '<div class="ganger" id="ID' + ganger.id + '" style="background:' + ganger.player.colour + ' ; top: ' + ganger.location.y + 'px; left: ' + ganger.location.x +'px;"><span class="name">' + ganger.name + '</span></div>'
    },
    setElement: function(el){
      ganger.el = el;
    }
  };
  return ganger;
};