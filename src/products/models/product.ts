import {type Product } from '@/products/interfaces/product';
import {Model, Schema, model, models} from 'mongoose'

const productSchema = new Schema({
    coins: {type: Number, required: true},
    coins_forzada: {type: Number || null, required: false},
    coins_sale: {type: Number || null, required: false},
    destacado: {type: Number, required: true},
    nombre: {type: String, required: true},
    id_producto: {type: Number, required: true},
    id_categoria: {type: Number, required: true},
    id_subcategoria: {type: Number, required: true},
    id_marca: {type: Number, required: true},
    precioEspecial: {type: Number, required: true},
    precioLista: {type: Number, required: true},
    imagenes: {type: Array<{
        nombre: { type: String, required: true},
        id_producto_imagen: { type: Number, required: true},
        orden: { type: Number, required: true}
    }> || null, required: false},
    vendible: {type: Number, required: true},
    stock: {type: Number, required: false},
    codigo: {type: String,
        enum: {
            values: ['disponible'],
            message: '{VALUE} no es un tipo válido de status product'
        }},
    sale: {type: Boolean, required: true},
    codigo_principal: {type: Array<String> || null, required: false},
    garantia: {type: Number, required: true},
    garantia_oficial: {type: Number, required: true},
    busca_en_ml: {type: String, required: false},
    iva: {type: Number, required: true},

},{
    timestamps: true
});


// productSchema.index({ name: 'text', market_hash_name: 'text'});


const Product: Model<Product> = models.Product || model('Product', productSchema );


export default Product;