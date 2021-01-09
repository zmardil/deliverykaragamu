const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Img1Path:{
        type:String,
        required:true
    },
    Img2Path:{
        type:String,
        required:false
    },
    Img3Path:{
        type:String,
        required:false
    },
    Img4Path:{
        type:String,
        required:false
    },
    Img5Path:{
        type:String,
        required:false
    },
    Category1 :{
        type:String,
        required:false
    },
    Category2 :{
        type:String,
        required:false
    },
    stock:{
        type:Number,
        required:false
    },
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Warrenty:{
        type:Number,
        required:false
    },
    Code:{
        type:String,
        required:true
    },
    Note:{
        type:String,
        required:false
    },
    Brand:{
        type:String,
        required:false
    },
    Rating:{
        type:String,
        required:false
    },
    Tags:{
        type:String,
        required:false
    }
});

const PurchaseSchema = new mongoose.Schema({
    UserId:{
        type:String,
        required:true
    },
    TotalAmount:{
        type:String,
        required:true
    },
    Items:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    paypalId:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
});

mongoose.model('products',ProductSchema);
mongoose.model('purchases',PurchaseSchema);
mongoose.model('users',UserSchema);


mongoose.connect('mongodb+srv://user:user@cluster0.ypsev.mongodb.net/products?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log('Connected to DB');
}).catch((err)=>{
   console.error(err);
});

module.exports = mongoose;