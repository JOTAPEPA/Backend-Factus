import mongoose from "mongoose";

const itemsChema = new mongooseSchema ({
    codeReference: {type: String, requiered: true, unique: true},
    name : {type: String, requiered: true},
    quantity: {type: Number, requiered: true}
    
})