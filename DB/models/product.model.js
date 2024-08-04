import { Schema, model } from 'mongoose';
const productSchema= new Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }, 
    type:{
        type:String,
        
    },
    quantity:{
        type:Number,
    
        
    },
},{
    timestamps:true
});

const productModel =model ('Product',productSchema);

export default productModel;