const express=require('express')
const mongoose=require('mongoose')
const Comment=require('./models/commentSchema')
const Post=require('./models/PostSchema')

const app=express()
app.use(express.json())


//creatin first route
app.get('/',(req,res)=>{
    res.send("hello node api")
})


//inserting new data or product in database we use post
app.post('/POST/api/posts',async(req,res)=>{
    try {
        const product=await Post.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//for getting all the data from database,for this we use get
app.get('/GET/api/posts',async(req,res)=>{
    try {
        const products=await Post.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//for getting specific data from the database, we still use get and id
app.get('/GET/api/posts/:postId',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Product.findById(postId)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//for updating the specific data by id in database, we use put
app.put('/PUT/api/posts/:postId',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Product.findByIdAndUpdate(postId,req.body)
        if(!product){ //cant find the product
            return res.status(404),json({message:`cannot find any product with this ${postId}`})
        }
        const updatedProduct=await Product.findById(postId);
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//for deleting the specific data by id in database, we use delete
app.delete('/DELETE/api/posts/:postId',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Product.findByIdAndDelete(postId);
        if(!product){
            return res.status(404).json({message:`cannot find any product with this id ${postId}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//inserting new comment in database we use post
app.post('/POST/api/posts/:postId/comments',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Comment.create(postId,req.body,)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//for getting specific comment from the database, we still use get and id
app.get('/GET/api/posts/:postId/comments',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Comment.findById(postId)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



//for updating the specific comment by id in database, we use put
app.put('/PUT/api/posts/:postId/comments/:commentId',async(req,res)=>{
    try {
        const{postId}=req.params;
        const product=await Comment.findByIdAndUpdate(postId,req.body)
        if(!product){ //cant find the product
            return res.status(404),json({message:`cannot find any product with this ${postId}`})
        }
        const updatedProduct=await Product.findById(postId);
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//for deleting the specific data by id in database, we use delete
app.delete('/DELETE/api/posts/:postId/comments/:commentId',async(req,res)=>{
    try {
        const{commentId}=req.params;
        const product=await Comment.findByIdAndDelete(commentId);
        if(!product){
            return res.status(404).json({message:`cannot find any product with this id ${commentId}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//connecting to database
mongoose.connect('mongodb+srv://nodeapi:1234@node-api-2.l254pmy.mongodb.net/Node-Api-2?retryWrites=true&w=majority')
.then(()=>{
    console.log("database connected")
    //listening on port number
    app.listen(3000,()=>{
        console.log("node app is running")
    })
})
.catch((error)=>{
    console.log(error)
})