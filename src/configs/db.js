const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect(
      // "mongodb://127.0.0.1:27017/Dummy"
      'mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/Basket?retryWrites=true&w=majority'
    );
    
};
module.exports=connect;


