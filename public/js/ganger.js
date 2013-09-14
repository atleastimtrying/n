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
    setElement: function(el){
      ganger.el = new Kinetic.Image({
        x: ganger.location.x,
        y: ganger.location.y,
        image: game.imageObj,
        width: 30,
        height: 30,
        draggable: true,
        offset: [15, 15],
        dragBoundFunc: function(pos) {
          var x = ganger.location.x;
          var y = ganger.location.y;
          var radius = ganger.stats.m * game.scale;
          var scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
          if(scale < 1){
            return {
              y: Math.round((pos.y - y) * scale + y),
              x: Math.round((pos.x - x) * scale + x)
            };
          }else{
            return pos;
          }
        }
      });
      game.layer.add(ganger.el);
      game.layer.draw();
    },
    select: function(){
      ganger.el.setShadowOpacity(0.8);
      ganger.el.setShadowBlur(2);
      $(game).trigger('currentGanger', ganger);
      game.layer.draw();
    },
    deselect: function(){
      ganger.el.setShadowOpacity(0.4);
      ganger.el.setShadowBlur(4);
      game.layer.draw();
    },
    movement: function(){
      ganger.el.setDraggable(true)
      ganger.el.setShadowColor('black')
      ganger.el.setShadowBlur(4)
      ganger.el.setShadowOffset(2)
      ganger.el.setShadowOpacity(0.4);
      ganger.el.on('mouseup', ganger.select);
      game.layer.draw();
    },
    disable: function(){
      ganger.el.off('mouseup', ganger.select);
      ganger.el.setOpacity(0.5);
      ganger.el.setDraggable(false);
      game.layer.draw();
    }
  };
  return ganger;
};