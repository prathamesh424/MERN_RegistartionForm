const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regis" , {
    
}).then(() =>{
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection");
})






// const db = async () =>{
//     try {
//         mongoose.set('strictQuery' , false)
//         await mongoose.connect(process.env.Mongo_url) 
//         console.log('Connection Sucessfull ! ')
//     } catch (error) {
//         console.log('Connection Failed !') ;
//     }
// }
// module.exports = {db} ;