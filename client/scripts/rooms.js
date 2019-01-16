var Rooms = {

  storage : function(){
    var obj1 = {};
    for(var key in Rooms){
      if (Rooms[key]['roomname']){
        if (!obj1[key]['roomname']) {
          obj1[key]['roomname'] = 1; 
        }
      }
    }
   console.log(obj1)
  },
  
  add : function(value){
    $('#rooms button').on('click', function(){
       $('#rooms select').append("<option value = '" + value + "'>" + value + "</option>");
    })
  },
  
  //store roomnames here in obj
};