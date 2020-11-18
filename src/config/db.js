const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
});


module.exports= mongoose;