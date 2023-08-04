import { Schema, model } from 'mongoose';

const cajerosShema = Schema({
    serial :{
        type:String,
        required: [true, 'Es requerido el numero de Serie'],
        unique: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    efectivoDisponible:{
        type: Number,
        required: true
    },
    fechaInstalaccion:{
        type: Date,
        default: Date.now,
        required:true
    },
    ultimoMantenimiento:{
        type:Date,
        required: true
    }
})

export default model( 'Cajeros', cajerosShema );
