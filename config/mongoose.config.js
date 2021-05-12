const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/Base_de_Chistes',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('Estableciendo conección con la Base de Datos'))
  .catch(err=>console.log('Algo salio mál en la conexión', err));



