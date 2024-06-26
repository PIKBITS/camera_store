import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    modelname : String,
    stock : {
        type : Number,
        default : 1
    },
    price : Number,
    specs : [String],
    description : String,
    images : [String],
    featureImg : String,
    sold :{
        type : Boolean,
        default : false
    }
});

const products = mongoose.model('product', productSchema);

export default products;