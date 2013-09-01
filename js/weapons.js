N.weapons = {
  knife: {
    name: 'knife',
    closeCombat: true,
    ranged: false,
    strength : function(ganger){
      return ganger.strength;
    }
  },
  lasgun: {
    name: 'lasgun',
    closeCombat: false,
    ranged: true,
    strength: function(ganger){
      return 3;
    },
    range: 24
  }
};