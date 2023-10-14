import {Model, Schema, model, models} from 'mongoose'
import {type Filter } from '@/products/interfaces/filter';

const filterSchema = new Schema({
    id:{ type: Number, required: true },
    nombre:{ type: String, required: true },
    orden:{ type: Number, required: true },
},{
    timestamps: true
});


// productSchema.index({ name: 'text', market_hash_name: 'text'});


const Filter: Model<Filter> = models.Filter || model('Filter', filterSchema );


export default Filter;