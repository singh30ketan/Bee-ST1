const mongoose=require('mongoose')

const postSchema=mongoose.Schema(

{
    title:{
        type:String,
        required:[true,"Please enter the title of the product"],
        maxlength:"1000"
    },
    content:{
        type:String,
        required:true,
        maxlength:"1000"
    },
    author:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    comments:{
        type:String
    }
}
)

const Post=mongoose.model('Post',postSchema)
module.exports=Post