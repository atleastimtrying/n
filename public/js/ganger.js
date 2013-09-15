N.Ganger = function(game, player, name){
  var ganger = {
    id: N.utils.assignId(),
    player: player,
    name: name,
    stats: {
      m: 4,
      ws: 3,
      bs: 3,
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
      r: N.utils.roundom(360)
    },
    setElement: function(el){
      ganger.el = new Kinetic.Image({
        x: ganger.location.x,
        y: ganger.location.y,
        image: game.imageObj,
        width: game.scale,
        height: game.scale,
        rotationDeg: ganger.location.r,
        draggable: true,
        offset: [game.scale/2, game.scale/2],
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
    rotateLeft: function(){
      ganger.el.rotateDeg(-45);
      game.layer.draw();
    },
    rotateRight: function(){
      ganger.el.rotateDeg(45);
      game.layer.draw();
    },
    selectMove: function(){
      ganger.el.setShadowOpacity(0.8);
      ganger.el.setShadowBlur(2);
      $(game).trigger('currentGanger', ganger);
      game.layer.draw();
      $(game).trigger('overlays.position', {
        selector: 'movement', 
        x: ganger.location.x,
        y: ganger.location.y,
        radius: ganger.stats.m * game.scale
      });
      $(game).on('input.left', ganger.rotateLeft);
      $(game).on('input.right', ganger.rotateRight);
    },
    selectShoot: function(){
      ganger.el.setShadowOpacity(0.8);
      ganger.el.setShadowBlur(2);
      $(game).trigger('currentGanger', ganger);
      game.layer.draw();
      $(game).trigger('overlays.position', {
        selector: 'range', 
        x: ganger.location.x, 
        y: ganger.location.y,
        rotation: ganger.location.r - 112.5,
        radius: ganger.weapons[1].range * game.scale
      });
    },
    setPosition: function(){
      ganger.location = {      
        x: ganger.el.getX(),
        y: ganger.el.getY(),
        z: 0,
        r: ganger.el.getRotationDeg()
      }
    },
    deselect: function(event, id){
      if(ganger.id !== id){
        ganger.setPosition();
        ganger.el.setShadowOpacity(0.4);
        ganger.el.setShadowBlur(4);
        game.layer.draw();
      }
      $(game).off('input.left', ganger.rotateLeft);
      $(game).off('input.right', ganger.rotateRight);
    },
    movement: function(){
      ganger.el.setDraggable(true)
      ganger.el.setShadowColor('black')
      ganger.el.setShadowBlur(4)
      ganger.el.setShadowOffset(2)
      ganger.el.setShadowOpacity(0.4);
      ganger.el.on('mouseup', ganger.selectMove);
      game.layer.draw();
    },
    endMovement: function(){
      ganger.setPosition();
      ganger.el.off('mouseup', ganger.selectMove);
      ganger.el.setDraggable(false);
    },
    shooting: function(){
      ganger.el.on('mouseup', ganger.selectShoot);
    },
    endShooting: function(){
      ganger.el.off('mouseup', ganger.selectShoot);
    },
    disable: function(){
      ganger.el.off('mouseup', ganger.selectMove);
      ganger.el.setOpacity(0.5);
      ganger.el.setDraggable(false);
      game.layer.draw();
    }
  };
  $(game).on('ganger.setElement', ganger.setElement);
  $(game).on('ganger.deselect', ganger.deselect);
  return ganger;
};