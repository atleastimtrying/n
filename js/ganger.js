N.Ganger = function(game, player, name){
  var ganger = {
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
      x: N.utils.roundom(30),
      y: N.utils.roundom(30),
      z: 0,
    },
    render: function(){
      return '<div class="ganger" style="top: ' + ganger.location.y + 'px; left: ' + ganger.location.x +'px;"><span class="name">' + ganger.name + '</span></div>'
    }
  };
  return ganger;
};