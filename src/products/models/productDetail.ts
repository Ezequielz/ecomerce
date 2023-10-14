import { Model, Schema, model, models } from 'mongoose'
import type { Unidades, ProductDetail, Tipo } from '@/products/interfaces/productDetail';

const productDetailSchema = new Schema({
    id_producto: { type: Number, required: true },
    incluidos: {
        type: Array<{
            id_incluido: { type: Number, required: true },
            nombre: { type: String, required: true },
            cantidad: { type: Number, required: true },
            imagen: {
                type: Array<{
                    nombre: { type: String, required: true },
                    id_producto_imagen: { type: Number, required: true },
                    orden: { type: Number, required: true },
                }>, required: false
            },
        }>, required: false
    },
    niveles: {type: {
        nivel_cpu: {type: Number, required: false},
        nivel_gpu: {type: Number, required: false},
    }},
    caracteristicas: {type: Array<{
        etiqueta: { type: String, required: true },
        valor: { type: String, required: true },
        unidades: {type: Unidades, required: true },
        id_agrupador: { type: Number, required: true },
        tipo: {type: Tipo, required: true},
        ondenAgrupador: { type: Number, required: true },
    }>},

}, {
    timestamps: true
});


// productSchema.index({ name: 'text', market_hash_name: 'text'});


const ProductDetail: Model<ProductDetail> = models.productDetail || model('productDetail', productDetailSchema);


export default ProductDetail;