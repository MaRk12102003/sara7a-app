import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect('mongodb+srv://mark:$aGAu9jaEvij_d3@cluster0.3abf1.mongodb.net/sarahah').then(() => {
        console.log("db connected succesfully");
    }).catch((err) => {
        console.log('fail to connect to db');
    })
}
