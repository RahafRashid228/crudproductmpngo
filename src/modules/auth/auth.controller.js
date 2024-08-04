import productModel from '../../../DB/models/product.model.js';


 //const router =Router();


export const creatingprod=async (req,res)=>{
    try{
    const {name,price,quantity}=req.body;
    
    //return res.json({email,password,name})
    //const product=await productModel.create({name,price,quantity})


// constproduct= new productModel ({productName:name,price:price,quantity:quantity})
//      await product.save();

const product=await productModel.insertMany ({productName:name,price:price,quantity:quantity});

    return res.status(201).json({message:"success",product});

}catch(error){
    return res.status(500).json({message:"error",error});

}}



