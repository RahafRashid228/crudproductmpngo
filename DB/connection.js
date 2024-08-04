import mongoose from 'mongoose';

const connectDB= ()=> {
     return mongoose.connect(process.env.DbConnection).then (result=>{
        console.log('DB connection estaibleshed');
     }).catch(err=>{
        console.log(`error to connect DB: ${err}`)
     });
  
    
  }



  export default connectDB;