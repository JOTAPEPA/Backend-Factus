import mongoose from 'mongoose';

const facturaSchema = new mongoose.Schema(
    {
        numbering_range_id: { type: Number, required: true },
        reference_code: { type: String, required: true, unique: true },
        items: {type: mongoose.Schema.Types.ObjectId, ref: 'item', required: true},
        customers:{type: mongoose.Schema.Types.ObjectId, ref: 'customers', required: true},
        observation: { type: String, required: true },
        paymentForm: { type: String, required: true },
        paymentDueDate: { type: Date, required: true },
        paymentMethodCode: { type: String, required: true, unique: true },
        billingPeriod: {
            startDate: { type: Date, required: true },
            startTime: { type: String, required: true },
            endDate: { type: Date, required: true },
            endTime: { type: String, required: true }
        }
    }
);

export default mongoose.model('factura', facturaSchema);
