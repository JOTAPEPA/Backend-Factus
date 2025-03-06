
import factura from '../models/factura.js';

const httpFactura = {
    
    postInsertar: async (req, res) => {
        try{    
            const { numbering_range_id, reference_code, observation, paymentForm, paymentDueDate, paymentMethodCode, billingPeriod } = req.body;
            const newFactura = new factura({ numbering_range_id, reference_code, observation, paymentForm, paymentDueDate, paymentMethodCode, billingPeriod });
            await newFactura.save();
            res.json({ newFactura });
        } catch( error){
            res.status(400).json({ message: 'Error al guardar la factura' });
        }
    },

    getListarTodos: async (req, res) => {
        try{
            const listarTodos = await factura.find();
            res.json(listarTodos);
        } catch(error){
            res.status(500).json({ message: 'Error al obtener las facturas' });
        }
    }

}

export default httpFactura;