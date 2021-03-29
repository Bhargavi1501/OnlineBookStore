//import express module
const exp = require("express");
const bookApiObj = exp.Router();

//import express-async-handler
const asyncErrHandler = require("express-async-handler");

//import cloudinary
const cloudinary = require("cloudinary").v2;

//import multer-storage-cloudinary
const {CloudinaryStorage} = require("multer-storage-cloudinary");

//import multer
const multer = require("multer");

//configure cloudinary
cloudinary.config({ 
    cloud_name: 'dl9nnxdio', 
    api_key: '552645319879562', 
    api_secret: 'qSL3sPqRQ9t5mnY5IN6VWXr9Llo' 
  });

//configure cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Books',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.fieldname + '-' + Date.now()
    },
});

//congigure multer
var upload = multer({ storage: storage });

//extract the body of req obj
bookApiObj.use(exp.json());

//get request handler for adding book
bookApiObj.post("/addbook",  upload.single('photo'),asyncErrHandler(async(req,res,next)=>{

    //get collection Obj
    let bookCollectionObject = req.app.get("bookCollectionObject");
    console.log("File path",req.file.path)
    //console.log("url is ",req.file.secure_url);
    console.log("book object is",req.body);
    let bookObj =  JSON.parse(req.body.bookObj)
   
    console.log("book object is",req.body);

    //check for user in db
    let book = await bookCollectionObject.findOne({bookname:bookObj.bookname});

    //if username already taken
    if(book!==null){
        res.send({message:"book existed"});
    }
    else{
        //create book
        
        bookObj.bookImgLink = req.file.path;
        let success = await bookCollectionObject.insertOne(bookObj);
        res.send({message:"book created"});
        //console.log("Final Book Object is",bookObj);
    }
}))

//get req handler for getbooks
bookApiObj.get("/getbooks", asyncErrHandler(async(req,res,next)=>{
    //get product collection object
    let bookCollectionObject = req.app.get("bookCollectionObject");

    let bookObj = await bookCollectionObject.find().toArray();
    
    res.send({message:bookObj});
    //console.log(bookObj);
}))





//export
module.exports = bookApiObj;