var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch((data) => { 
    data.results.map(function(x){
      MessagesView.renderMessage(x);
      })
    });
  },

  // render: function(callback = ()=>{}) {
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     console.log(data);
  //     $chats.append(data);
  //     callback();
  //   });
  // }  
  renderMessage :function(item){
   // var compiled = MessageView.render(item.value)
   MessagesView.$chats.append(MessageView.render(item));
  },
  
  // renderMessage: function(message){
  //  $('.submit').on('click', function(){
  //    MessagesView.$chats.append('<div>' + message + '</div>' );
  //  })  
  // }, 
  
      
    // })
  }



