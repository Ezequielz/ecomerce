import {Model, Schema, model, models} from 'mongoose'
import { Group } from '../interfaces/group';


const groupSchema = new Schema({
    id:{ type: Number, required: true },
    nombre:{ type: String, required: true },
    orden:{ type: Number, required: true },
},{
    timestamps: true
});


// productSchema.index({ name: 'text', market_hash_name: 'text'});


const Group: Model<Group> = models.Group || model('Group', groupSchema );


export default Group;