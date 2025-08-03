import express from "express"
import mongoose from "mongoose"

const app=express()

mongoose.set('strictQuery', true)

try{
   await mongoose.connect('mongodb+srv://gautammanipal:gautam@cluster0.4r3qrcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbame=crafthub');
   console.log("connected to mongodb");
}
catch(error)
{
   handleError(error);
}

app.listen(8000, ()=>{
   console.log("Backend is running!")
})