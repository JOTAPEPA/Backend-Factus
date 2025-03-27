
import item from '../models/items.js'

const httpItems = {

    postInsertar: async (req, res) => {
        try {
            const { codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id, withholding_taxes, state } = req.body;
            const newItem = new item({ codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id, withholding_taxes, state });
            await newItem.save();
            res.json({ newItem });
        } catch (error) {
            console.log('Error al crear el producto', error);
            res.status(500).json(error);
        }
    },

    getListarTodos: async (req, res) => {
        try {
            const listarTodos = await item.find();
            res.json(listarTodos);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los items' });
        }
    },

    getListarById: async (req, res) => {
        try {
            const product = await item.findById(req.params.id)
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener producto' })
            console.log(error)
        }
    },

    updateItem: async (req, res) => {
        try {
            const { id } = req.params;
            const { codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id, withholding_taxes, state } = req.body;
            let update = {
                codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id, withholding_taxes, state
            }
            const modifiedItem = await item.findByIdAndUpdate(id, update, { new: true });
            res.json(modifiedItem);
        } catch (error) {
            res.status(400).json({ error: 'Error al actualizar producto' })
            console.log(error)
        }
    },

    putModificarInactivo: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await item.findByIdAndUpdate(id, { state: 0 }, { new: true });
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: 'Error al desactivar producto' })
            console.log(error);
        }

    },

    putModificarActivo: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await item.findByIdAndUpdate(id, { state: 1 }, { new: true });
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: 'Error al desactivar producto' })
            console.log(error);
        }

    },



}

export default httpItems;