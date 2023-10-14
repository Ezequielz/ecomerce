import { Model, Schema, model, models } from 'mongoose'
import { type Categorie } from '@/products/interfaces/categorie';

const categorieSchema = new Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    id_agrupador: { type: Number, required: true },
    imagen: { type: String, required: false },
    sub_cate_oculto_ponderado: { type: String, required: false },
    banners_sub_categorias: {
        type: Array<{
            id: { type: Number, required: true },
            id_sub_cate: { type: Number, required: true },
            descripcion: { type: String, required: true },
            nombre: { type: String, required: true },
            nombre_tablet: { type: String, required: true },
            nombre_mobile: { type: String, required: true },
            estado: { type: Number, required: true }

        }> || null, required: false
    },
    orden: { type: Number || null, required: false }

}, {
    timestamps: true
});

const Categorie: Model<Categorie> = models.Categorie || model('Categorie', categorieSchema);


export default Categorie;