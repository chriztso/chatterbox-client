var Messages = {


  _data: {},
 
  items: function(){
    return _.chain(Messages._data)
  },

  add: function(message, callback = ()=>{}){
    Messages._data[message.objectID] = message;
    callback();
  },

  update: function(messages, callback = ()=>{}){
    for (var message of messages){
      Messages._data[message.objectID] = Messages._conform(message); 
    }
    callback();
  }, 

  _conform: function(message){
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message 
  }

};