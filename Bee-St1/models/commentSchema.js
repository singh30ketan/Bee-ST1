//whenever we want to connect to database we use mongoose
const mongoose=require('mongoose')

const commentSchema=mongoose.Schema(
    {
        content:{
            type:String,
            required:[true,"Please enter the content of the product"],
            maxlength:"1000"
        },
        author:{
            type:String,
            required:true,
        },
        createdate:{
            type:Number,
            timestamp: { type: Date, default: Date.now},
        }
    }
)

const Comment=mongoose.model('Comment',commentSchema)
module.exports=Comment

//so this is the model of the schema of my upcoming database