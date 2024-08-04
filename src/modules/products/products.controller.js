import productModel from "../../../DB/models/product.model.js"

export const getAll=async(req,res)=>{
const products= await productModel.find();
return res.status(200).json({message:"success",products});
}


export const getproduct=async(req,res)=>{
    const {id}=req.params;
    //return res.json(id);
    
    const product= await productModel.findById({_id:id});
    return res.status(200).json({message:"success",product});
    }

    export const updateproduct=async(req,res)=>{
       
        const {id}= req.params;
       // return res.json(id);
       const {quantity}=req.body;
       const product=await productModel.updateOne({_id:id},
        {quantity:quantity});
        return res.status(200).json({message:"succes",product})
        if(!product.modifiedCount >0){
            return res.status(400).json({message:"can't update product"})
        }
    }



    export const deleteproduct=async(req,res)=>{
        const {id}= req.params;
       // return res.json(id);
       const product=await productModel.deleteOne({_id:id});
        return res.status(200).json({message:"succes",product})
        
    }