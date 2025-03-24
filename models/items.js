import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
    {
        codeReference: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        discount_rate: { type: Number },
        price: { type: Number, required: true },
        tax_rate: { type: Number, required: true },
        unit_measure_id: { type: String, required: true, unique: true },
        standard_code_id: { type: Number, required: true, unique: true },
        is_excluded: { type: Boolean, required: true },
        tribute_id: { type: Number, required: true, unique: true },
        // withholding_taxes: [
        //     {
        //         code: { type: String, required: true, unique: true },
        //         withholding_taxes_rate: { type: String, required: true },
        //     },
        // ]
    },
);  

export default mongoose.model('item', itemsSchema);