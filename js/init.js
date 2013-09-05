window.N = {};
require([
  "libs/jquery",
  "js/dice.js",
  "js/game.js",
  "js/ganger.js",
  "js/player.js",
  "js/start_screen.js",
  "js/utils.js",
  "js/weapons.js"], function(){
  $(function(){
    N.game = new N.Game();
  });
});
