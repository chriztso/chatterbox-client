var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  // render: function(callback = ()=>{}) {
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     console.log(data);
  //     $chats.append(data);
  //     callback();
  //   });
  // }  
  renderMessage :function(){
    Messages
      .items()
      // .filter(Room.isSelected(message))
      .each((message) => { 
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      })
    
   // _.each(Messages._data, function(message){
   //    var $message = MessageView.render(message);
   //    MessagesView.$chats.append($message);
   // })

  },
  
  // renderMessage: function(message){
  //  $('.submit').on('click', function(){
  //    MessagesView.$chats.append('<div>' + message + '</div>' );
  //  })  
  // }, 
  
      
    // })
  }



