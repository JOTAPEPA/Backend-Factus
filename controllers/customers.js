import { get } from "mongoose";
import customer from "../models/customers";

const httpCustomer = {

    postInsertar: async (req, res) => {
        try{
            const { identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId } = req.body;
            const newCustomer = new customer({identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId});
            await newCustomer.save();
        } catch(error){
            res.status(500).json({ message: 'Error al guardar el cliente' });   
            
        }
    },

    getListarTodos: async (req, res) => {
        try{
            const listarTodos = await customer.find();
            res.json(listarTodos);
        } catch(error){
            res.status(500).json({ message: 'Error al obtener los clientes' });
        }
    }
}