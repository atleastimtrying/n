window.N = {};
require.config({
  paths:{
    'mustache': 'libs/mustache'
  }
});
require([
  "libs/jquery",
  "libs/kinetic",
  "js/dice.js",
  "js/game.js",
  "js/ganger_display.js",
  "js/ganger.js",
  "js/player.js",
  "js/start_screen.js",
  "js/utils.js",
  "js/weapons.js"], function(){
  $(function(){
    N.game = new N.Game();
  });
});
