import Cajero from '../models/Cajeros.js';
import response from 'express';

const postCajeros = async(req, res=response)=>{
    const {serial,ubicacion,estado,efectivoDisponible,fechaInstalaccion,ultimoMantenimiento}=req.body
    serial = req.body.serial.toUpperCase();
    const cajeroDB = await Cajero.findOne({serial})
    const cajero = new Cajero ({serial,ubicacion,estado,efectivoDisponible,fechaInstalaccion,ultimoMantenimiento})
    if (cajeroDB) {
        return res.staus(400).json({
            msg:`Este Cajero ya existe ${cajeroDB.serial}` ,
        })
    }
    
}