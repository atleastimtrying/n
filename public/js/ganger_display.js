N.GangerDisplay = function(game){
  var container = $('#ganger-display');
  var template = $('#gangerDisplayTemplate');
  var render = function(event, ganger){
    container.html(Mustache.to_html(template.html(), ganger));
  };
  $(game).bind('currentGanger', render);
};