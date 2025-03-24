
import item from '../models/items.js'

const httpItems = {

    postInsertar: async (req, res) => {
        try {
            const { codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id } = req.body;

            // Validación extra
            if (!codeReference || !name || !quantity || !price || !tax_rate || !unit_measure_id || !standard_code_id || !is_excluded || !tribute_id) {
                return res.status(400).json({ message: "Todos los campos son obligatorios." });
            }

            const newItem = new item({ codeReference, name, quantity, discount_rate, price, tax_rate, unit_measure_id, standard_code_id, is_excluded, tribute_id });
            await newItem.save();
            res.json({ newItem });
        } catch (error) {
            console.log('Error al crear el producto', error);
            res.status(500).json({ message: 'Error al guardar el item' });
        }
    },

    getListarTodos: async (req, res) =>{
        try{
            const listarTodos = await item.find();
            res.json(listarTodos);
        } catch(error){
            res.status(500).json({message: 'Error al obtener los items'});
        }
    }
}

export default httpItems;