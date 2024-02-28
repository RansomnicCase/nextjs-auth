import mongoose, { connection } from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("connected succesfully");
        })
        connection.on('error',(err)=>{
            console.log("please make sure that mongo is running"+err);
            process.exit();
        })
    } catch(error){
        console.log("something went wrong");
        console.log(error);
    }
}