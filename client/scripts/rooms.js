var Rooms = {
  
   _data: [], 

   selected: 'lobby', 

   // isSelected: function(roomname){
   //   return roomname === Rooms.selected || 
   //          !roomname && Rooms.selected === 'lobby';
    
   // },

  update:function(messages){
  _.chain(messages)
   .pluck('roomname')
   .uniq()
   .each(room => Rooms._data.push(room));
   }
 //  storage : function(message, callback = ()=>{}){
 //    Rooms._roomNames[Messages._data[Rooms._conform(message).roomname]]= 1;
 //    callback(); 
 //  },
  
 //  // add : function(value){
 //  //   // $('#rooms button').on('click', function(){
 //  //   //    $('#rooms select').append("<option value = '" + value + "'>" + value + "</option>");
 //  //   // })
 //  // },

 // _conform: function(message){
 //    message.roomname = message.roomname || '';
 //    return message 
 //  }
  
  //store roomnames here in obj
};