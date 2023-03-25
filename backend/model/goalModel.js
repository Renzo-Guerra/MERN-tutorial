const mongoose = require('mongoose');

/*
  El schema vendria a ser los parametros que le tienen que llegar, 
  (es un template). Debe llegarle el name 'text' de tipo String,
  en caso de que no lo manden, se mostrará el mensaje.
*/
const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'please add a text value']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema);