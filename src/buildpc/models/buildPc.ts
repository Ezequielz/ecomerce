import { Model, Schema, model, models } from 'mongoose'
import { Auriculare, BuildPC, CPU, Coolercpu, Fuente, Gab, HD, Mem, Monitore, Mother, Video, Coolerfan, Mouse, Mousepad, Teclado, Notebook } from '../interfaces/buildpc';


const BuildPCSchema = new Schema({
    mothers: { type: Array<Mother>, required: true },
    cpu: { type: Array<CPU>, required: true },
    coolercpu: { type: Array<Coolercpu>, required: true },
    mem: { type: Array<Mem>, required: true },
    video: { type: Array<Video>, required: true },
    hd: { type: Array<HD>, required: true },
    gab: { type: Array<Gab>, required: true },
    fuente: { type: Array<Fuente>, required: true },
    monitores: { type: Array<Monitore>, required: true },
    auriculares: { type: Array<Auriculare>, required: true },
    card_reader: { type: Array<any>, required: true },
    coolerfan: { type: Array<Coolerfan>, required: true },
    mouse: { type: Array<Mouse>, required: true },
    mousepad: { type: Array<Mousepad>, required: true },
    opticos: { type: Array<any>, required: true },
    os: { type: Array<any>, required: true },
    soportes: { type: Array<any>, required: true },
    teclados: { type: Array<Teclado>, required: true },
    extras: { type: Array<any>, required: true },
    notebooks: { type: Array<Notebook>, required: true },
});

const BuildPC: Model<BuildPC> = models.BuildPC || model('BuildPC', BuildPCSchema);


export default BuildPC;