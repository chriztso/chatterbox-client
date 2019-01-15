var MessageView = {
  
  render: _.template(`
      <div class="chat"> 
        <div class="username">  <%- username %> </div>
        <div> <%- text %> </div>
      </div>
    `), 
  


//   render: function(successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: function(data){
//         $.each(data, function(i, datatype){
//         // console.log(i.username);
// console.log(data)
//          $('#chats').append('<div class = "chat">' + JSON.stringify(datatype) + '</div>');
//         })
   
//       },


//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     // })
//     })
//   }

  
  // append: this.$chat.append(compile),
};