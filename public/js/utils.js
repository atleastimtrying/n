N.utils = {
  roundom: function(int){
    return Math.round(Math.random() * int);
  },
  id_count: 0,
  assignId: function(){
    this.id_count += 1;
    return this.id_count;
  },
  fetchInputs: function(selector){
    response = [];
    $(selector).each(function(){
      response.push($(this).val());
    });
    return response;
  },
  collision: function(object1, object2){
    //

  }
};