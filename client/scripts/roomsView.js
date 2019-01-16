var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // App.fetch((data) => { 
    // data.results.map(function(message){
    // RoomsView.renderRoom(message);
    // })
    // });  
  },

  render: function(){
         console.log('render', Rooms._data); 
        //  var $room = $('<option> </option>');
        //  $room.text('hi');
        // $('#rooms select').append($room);
     
        //  console.log('hi');
        for(var key of Rooms._data){
        var $option = '<option>' + Rooms._data + '</option>';
        $('#rooms select').append($option);
        }
        }
      }
  // for (let i  = 0; i < Rooms._data.length; i++){
  //   var $room = '<option>' + Rooms._data[i] + '</option>'
  //       $('#rooms select').append($room);
  


  // _.each(Rooms._data, function(room){
  //        console.log('render', Rooms._data);
  //       $('#rooms select').append($room);
 // }
//)
  // for (var keys in Rooms._data){
  //   var $room = '<option>' + Rooms._data[keys] + '</option>'
  //       $('#rooms select').append($room);
  // }
  //Iterate through all of our data, store the roomname with the text  
  
    //Create the dropdown menu with the roomname

    //Once the specific room is clicked
      //Clear the chats div in roomview and append out the filtered messages depending on room name 
    
  
  
  

