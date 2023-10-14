import {Model, Schema, model, models} from 'mongoose'
import { Marca } from '@/products/interfaces/marcas';


const marcaSchema = new Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    marca_nombre_alias: { type: String, required: false },
    marca_nombre_no_ponderado: { type: String, required: false },
    garantia_oficial: { type: Number, required: true },
    garantia_meses_por_defecto: { type: Number, required: true },
    garantia_meses_propia: { type: Number, required: true }
},{
    timestamps: true
});


// productSchema.index({ name: 'text', market_hash_name: 'text'});


const Marca: Model<Marca> = models.Marca || model('Marca', marcaSchema );


export default Marca;