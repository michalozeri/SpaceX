import axios from 'axios'
 export const  landingsService={
     query
 }

 async function query() {
   try{
  let res= await axios.get("https://api.spacexdata.com/v4/launches")
    return res.data.slice(0,20)
   } 
   catch(err){
       console.log('Error is', err);
       throw err
   }
   
  }
