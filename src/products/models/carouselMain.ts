import { Model, Schema, model, models } from 'mongoose'
import { CarouselMain } from '../interfaces/carouselMain';

const carouselMainSchema = new Schema({
    id: {type: Number, required: true},
    descripcion: {type: String, required: true},
    nombre: {type: String, required: true},
    nombreTablet: {type: String, required: true},
    nombreMobile: {type: String, required: true},
    estado: {},
    orden: {},
    link: {type: String, required: true},
    fechaLanzamiento: {type: String || null, required: false},
    fechaVencimiento: {type: String || null, required: false},
    ventana: {type: Boolean, required: true},

});

const CarouselMain: Model<CarouselMain> = models.CarouselMain || model('CarouselMain', carouselMainSchema);


export default CarouselMain;