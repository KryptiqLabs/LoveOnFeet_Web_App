//YOUR DATABASE MODEL LIVES HERE...
//YOUR DATABASE MODEL DEFINES & SETS PROPERTIES, DATA-TYPES & RESTRICTIONS TO YOUR MODEL
//BELOW IS A FUN EXAMPLE OF A DB MODEL WITH MONGODB/MONGOOSE, USING A BSON/JSON FORMAT
//THE MODEL EXAMPLE IS ONE OF A USER WITH AN ONLINE BANK ACCOUNT


//IMPORT REQUIRED DEPENDENCIES/MODULES/LIBRARIES
//const mongoose = require('mongoose');   --> //MONGOOSE IS A MIDDLEWARE USED TO INTERACT WITH MONGODB AND PERFORM C.R.U.D OPERATIONS




// const myBankUserSchema = new mongoose.Schema({
//     //DEFINE A SCHEMA WITH A FIELD WITH A NAME & DATA-TYPE FOR SIMPLICITY
//   username: { type: String, required: true, unique: true, },
//   password: { type: String, required: true },
//   first_name: { type: String, default: null },
//   last_name: { type: String, default: null },
//   number: { type: String, default: null },
//   city: { type: String, default: null },
//   country: { type: String, default: null },
//   address: { type: String, default: null },
//   occupation: { type: String, default: null },
//   description: { type: String, default: null },
//   date_created: { type: Date, default: Date.now() },
//   verified: { type: Boolean, default: false },
//   //DEFINE A SCHEMA FOR A BANK CARD FOR AN ACCOUNT 
//   card: { card_owner: { type: String, default: null },
//   card_type: { type: String, default: null },
//   card_name: { type: String, default: null },
//   card_description: { type: String, default: null },
//   card_balance: { type: String, default: null },
//   card_currency: { type: String, default: null, symbol: '$', name: "dollar/s" },
//   card_number: { type: String, default: null }, 
//   card_id: { type: String, default: null },
//   activation: { type: Boolean, default: false },
//   created_at: { type: Date, default: Date.now() },
//   }
// }
// );


// //HERE WE SET THE SCHEMA AS A MODEL WITH MONGOOSE, PARSING IN BY FIRST PRIORITY, THE DATABASE NAME, THEN THE SCHEMA NAME//
// const myBankUserModel = mongoose.model('taurusUsers', myBankUserSchema);



// //HERE WE EXPORT THE MODEL FOR USE IN ANY OTHER FILE//
// MODULE.exports = myBankUserModel;