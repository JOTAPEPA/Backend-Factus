
import customer from "../models/customers.js";

const httpCustomer = {

    postInsertar: async (req, res) => {
        try {
            const { identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId, state } = req.body;
            const newCustomer = new customer({
                identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId, state,
            });
            await newCustomer.save();
            res.json({newCustomer})
        } catch (error) {
            res.status(500).json({error});
            console.log(error);
        }
    },

    getListarTodos: async (req, res) => {
        try {
            const listarTodos = await customer.find();
            res.json(listarTodos);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los clientes' });
            console.log(error);
            
        }
    }
}

export default httpCustomer;