
import customer from "../models/customers.js";

const httpCustomer = {

    postInsertar: async (req, res) => {
        try {
            const { identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId } = req.body;
            const newCustomer = new customer({
                identification, dv, company, tradeName, names, addres, email, phone, legalOrganizationId, tributeId, identificationDocumentId, municipalityId
            });
            await newCustomer.save();
            res.json({newCustomer})
        } catch (error) {
            res.status(400).json({ message: 'Error al guardar el clienteoñ' });
            console.log(error);
        }
    },

    getListarTodos: async (req, res) => {
        try {
            const listarTodos = await customer.find();
            res.json(listarTodos);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los clientes' });
        }
    }
}

export default httpCustomer;