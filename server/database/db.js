import mongoose from 'mongoose';

 export const Connection =async()=> {
   const URL = 'mongodb://localhost:27017/user';
    try {
     await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
     console.log("Database Connected Successsfully")
    }catch(error) {
         console.log('error while connecting with the database', error)
    }
}
