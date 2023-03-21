//YOUR SERVER & MIDDLEWARES ARE CREATED & INITIALIZED HERE//
//THIS IS JUST A BASIC SETUP AS AN ENTRY-POINT FOR THE WEB APP TEMPLATE//
//YOU MAY CUSTOMIZE & MODIFY ANYTHING AS YOU PLEASE//
//////////////////////////////////////////////////////////////////////////



//IMPORT REQUIRED DEPENDENCIES/MODULES/LIBRARIES//

//EXPRESS FOR YOUR SERVER INSTANCE//
const express = require('express');

//MORGAN FOR YOUR REQUEST & RESPONSE CONSOLE-LOGGING//
const morgan = require('morgan');

//CORS FOR ACCESS FROM YOUR ORIGIN e.g. "http://localhost:PORT" //
const cors = require('cors');

//BODY-PARSER TO READ ENCODED DATA IN THE BODY e.g. "req.body.username" //
const bodyParser = require('body-parser');

//DONTENV FOR YOUR APPLICATION SECRETS & ENVIRONMENT VARIABLES//
const dotenv = require('dotenv');
//SET A PATH FOR YOUR "config.env" FILE//
//MUST BE IN THE ROOT DIRECTORY: "J.S.W.A.T v1\Application" //
dotenv.config({
    path: 'config.env'
});

//PATH FOR YOUR STATIC FILES TO BE RESOLVED BY THE SERVER
const path = require('path');

//DEFINE YOUR PORT NUMBER, BY DEFAULT: 3000
const PORT = process.env.PORT || 3000; //YOUR PORT NUMBER: "3000"//
const ORIGIN_URI = process.env.ORIGIN_URI; //YOUR HOST_NAME:"http://localhost"//
const corsOptions = {
    origin: ORIGIN_URI
}; //IMPLEMENT CORS WITH YOUR LOCALHOST//
////////////////////////////////////////////////////////////////////////////////////



//INITIALIZE AN EXPRESS SERVER INSTANCE//
const Server = express();

//INITIALIZE ALL MIDDLEWARES//

//Middleware-#1 - BODY-PARSER//
Server.use(bodyParser.json({
    extended: false
}));

//Middleware-#2 - CORS//
Server.use(cors(corsOptions));

//Middleware-#3 - MORGAN//
Server.use(morgan('dev'));

//Middleware-#4 - EJS: SETS THE DEFAULT RENDER ENGINE FOR YOUR VIEWS//
Server.set("view engine", "ejs");

//Middleware-#5 - PATH: FOR VIEWS
//(*IMPLEMENTED BECAUSE THE VIEWS DIRECTORY IS NOT IN THE ROOT DIRECTORY). //
//BY DEFAULT, THE EJS ENGINE WILL SEARCH FOR A "VIEWS" DIRECTORY IN ROOT. //
//OUR CUSTOM VIEWS PATH IS FROM "Source/Frontend/Views"//
Server.set("views", path.resolve(__dirname, "./Source/Frontend/Views"));

//Middleware-#6 - PATH: FOR COMPONENTS e.g. "Source/Frontend/Components" //
Server.use('/components', express.static(path.resolve(__dirname, "./Source/Frontend/Components")));

//Middleware-#7 - PATH: FOR SERVICES e.g. "Source/Frontend/Services" //
Server.use('/services', express.static(path.resolve(__dirname, "./Source/Frontend/Services")));

//Middleware-#8 - PATH: FOR ASSETS e.g. "Source/Frontend/Assets" //
Server.use('/assets', express.static(path.resolve(__dirname, "./Source/Frontend/Assets")));

//Middleware-#9 - SETS THE MAIN ROUTER FOR THE APPLICATION//
Server.use('/', require("./Source/Backend/API/Routers/main_router"));
/////////////////////////////////////////////////////////////////////////////////////////////////

//CONNECT TO YOUR SERVER:
//1.) OPEN PORT TO LISTEN IN ON SERVER,
//2.) LOG THE SERVER CONNECTION,
//3.) LOG ANY SERVER CONNECTION ERRORS, 
//4.) TEST YOUR CONNECTION IN YOUR BROWSER e.g. URL: "http://localhost:3000", 
Server.listen(PORT, () => {
    console.log("J.S.W.A.T build successfull...\nLove On Feet Foundation Web App has been successfully deployed to Development/Production Server...\nServer connection open, listening on:\nHOST: localhost\nPORT:", PORT, "\n\nAwaiting any events to be triggered from the compiler-engine...\n\nAwaiting any changes to be pushed from the Developer...")
});
