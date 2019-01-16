var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
    
  //Want to create a function that takes in the input; 
    //Hold the message somewhere;
  //Iterate the create function with the message now; 
  // submit : function(){
  //   $(".submit").on('click', function(){
  //     //Take in the message value and invoke the create function
  //     console.log("hi")
  //   })
  // }, 


  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
      //console.log('handlesubmitran', event)
    var message = {
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };

    Parse.create(message, (data) => {
      _.extend(message, data)
      Messages.add(message, MessagesView.renderMessage())
      
    });
    // MessagesView.initialize();
      // $('#chats').append('sdfdsf')
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};