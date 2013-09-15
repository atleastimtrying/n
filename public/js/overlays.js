N.Overlays = function(game){
  var overlays = this;
  var layer = new Kinetic.Layer();
  var templates = {};
  templates['movement'] = new Kinetic.Circle({
    x: 0,
    y: 0,
    radius: 70,
    fill: 'rgba(200,255,200,0.5)'
  });
  layer.add(templates['movement']);
  templates['movement'].hide();

  templates['range'] = new Kinetic.Wedge({
    x: 0,
    y: 0,
    radius: 70,
    angleDeg: 45,
    fill: 'rgba(255,200,200,0.5)',
    rotationDeg: 0
  });
  layer.add(templates['range']);
  templates['range'].hide();

  var addLayer = function(){
    game.stage.add(layer);
    layer.draw();
  };

  var position = function(event, options){
    var target = templates[options.selector];
    target.setX(options.x);
    target.setY(options.y);
    target.setRadius(options.radius);
    if (options.rotation) target.setRotationDeg(options.rotation);
    layer.draw();
  };
  
  var show = function(event, label){
    templates[label].show();
  };

  var hide = function(event, label){
    templates[label].hide();
  };

  $(game).bind('overlays.init', addLayer);
  $(game).bind('overlays.position', position);
  $(game).bind('overlays.hide', hide);
  $(game).bind('overlays.show', show);
};